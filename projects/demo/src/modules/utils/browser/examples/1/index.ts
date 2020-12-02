import {Component, Inject} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {isEdge, isEdgeOlderThan, isFirefox, isIE} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';
@Component({
    selector: 'tui-browser-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiBrowserExample1 {
    constructor(@Inject(USER_AGENT) private readonly userAgent: string) {}

    get aboutMyBrowser(): string {
        if (isEdge(this.userAgent)) {
            if (isEdgeOlderThan(13, this.userAgent)) {
                return 'Edge старше 13-той версии';
            }

            return 'Edge до 13 версии';
        }

        if (isIE(this.userAgent)) {
            return 'К сожалению, у Вас IE11';
        }

        if (isFirefox(this.userAgent)) {
            return 'Здорово, у вас Firefox!';
        }

        return 'Похоже, что Вы пользуетесь браузером на основе Chromium, поздравляем!';
    }
}
