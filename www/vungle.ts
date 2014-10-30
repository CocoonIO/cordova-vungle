/// <reference path='vungle.d.ts'/>

module CC {
    export class Vungle implements IVungle {
        isSupported() {
            return true;
        }
        init(vungleid: string, config?: IVungleConfig, successcb?: () => void, errorcb?: (err: string) => void) {
            (<any>window).cordova.exec(() => {
                if (successcb) successcb();
            }, (err) => {
                if(errorcb) errorcb(err);
            }, "VunglePlugin", "init", [vungleid, config]);
        }

        playAd(config?: IVungleConfig, successcb?: () => void, errorcb?: (err: string) => void) {
            (<any>window).cordova.exec(() => {
                if(successcb) successcb();
            }, (err) => {
                if(errorcb) errorcb(err);
            }, "VunglePlugin", "playAd", [config]);
        }

        isVideoAvailable(successcb: (avail: boolean) => void, errorcb?: (err: string) => void) {
            (<any>window).cordova.exec((s: number) => {
                successcb(s == 1 ? true : false);
            }, (err) => {                    
                if(errorcb) errorcb(err);
            }, "VunglePlugin", "isVideoAvailable", []);
        }
    }
}
