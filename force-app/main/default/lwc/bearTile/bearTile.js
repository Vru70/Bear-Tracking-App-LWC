/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 04-26-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-26-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, api } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
export default class BearTile extends LightningElement {
    @api bear;
    appResources = {
        bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
    };

    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('bearview', {
            detail: this.bear.Id
        });
        this.dispatchEvent(selectEvent);
    }
}