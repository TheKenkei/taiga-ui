import {CommonModule} from '@angular/common';
import {Component, Inject, NgModule, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PageObject} from '@taiga-ui/testing';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiNotificationContentContext} from '../../notification-content-context';
import {NotificationAlert} from '../Notification-alert';
import {TuiNotificationAlertComponent} from '../notification-alert.component';
import {TuiNotificationAlertModule} from '../notification-alert.module';

const label = 'I need you clothes';
const content = 'Your boots';
const data = 'And your motorcycle';

@Component({
    selector: 'alert-mock',
    template: `
        <button
            automation-id="tui-notification-alert__submit"
            (click)="submit()"
        ></button>
        <button
            automation-id="tui-notification-alert__complete"
            (click)="close()"
        ></button>
    `,
})
class AlertConstructorMock {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiNotificationContentContext<string, string>,
    ) {}

    submit() {
        this.context.emitHook(data);
    }

    close() {
        this.context.closeHook();
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [AlertConstructorMock],
    entryComponents: [AlertConstructorMock],
})
export class AlertTestModule {}

describe('NotificationAlertComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiNotificationAlertComponent<string, string>;
    let pageObject: PageObject<TestComponent>;

    const nextSpy = jasmine.createSpy('next');
    const errorSpy = jasmine.createSpy('error');
    const completeSpy = jasmine.createSpy('complete');
    const observerMock = {
        next: nextSpy,
        error: errorSpy,
        complete: completeSpy,
    };
    const testContext = {
        get prefix() {
            return 'tui-notification-alert__';
        },
    };

    @Component({
        template: ` <tui-notification-alert [item]="alert"></tui-notification-alert> `,
    })
    class TestComponent {
        @ViewChild(TuiNotificationAlertComponent)
        component: TuiNotificationAlertComponent<string, string>;

        alert = new NotificationAlert(observerMock, content, {label});
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiNotificationAlertModule, AlertTestModule],
            declarations: [TestComponent],
        });

        nextSpy.calls.reset();
        errorSpy.calls.reset();
        completeSpy.calls.reset();

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
    });

    describe('Alert класс', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('Значение status по умолчанию', () => {
            expect(component.item!.status).toBe('info');
        });

        it('Значение autoclose по умолчанию', () => {
            expect(component.item!.autoClose).toBe(true);
        });
    });

    describe('Отображение', () => {
        beforeEach(() => {
            testComponent.alert = new NotificationAlert(observerMock, content, {label});
            fixture.detectChanges();
        });

        it('Показывает заголовок', () => {
            expect(
                pageObject
                    .getByAutomationId(`${testContext.prefix}heading`)!
                    .nativeElement.textContent.trim(),
            ).toBe(label);
        });

        it('Показывает текст', () => {
            expect(
                pageObject
                    .getByAutomationId(`${testContext.prefix}content`)!
                    .nativeElement.textContent.trim(),
            ).toBe(content);
        });
    });

    it('close | Закрывает Alert и оповещает observer', () => {
        fixture.detectChanges();
        component.closeDialog();

        expect(nextSpy).not.toHaveBeenCalled();
        expect(completeSpy).toHaveBeenCalled();
    });

    describe('processComponent | Alert с произвольным шаблоном', () => {
        beforeEach(() => {
            testComponent.alert = new NotificationAlert(
                observerMock,
                new PolymorpheusComponent(AlertConstructorMock),
                {label, data, autoClose: false},
            );
            fixture.detectChanges();
        });

        it('Alert с произвольным шаблоном может передавать данные', () => {
            pageObject
                .getByAutomationId(`${testContext.prefix}submit`)!
                .nativeElement.click();

            expect(nextSpy).toHaveBeenCalledWith(data);
        });

        it('Alert с произвольным шаблоном может закрыться', () => {
            pageObject
                .getByAutomationId(`${testContext.prefix}complete`)!
                .nativeElement.click();

            expect(completeSpy).toHaveBeenCalled();
        });
    });
});
