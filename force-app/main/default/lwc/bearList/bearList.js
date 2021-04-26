/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 04-26-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-26-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
/** BearController.getAllBears() Apex method */
import getAllBears from '@salesforce/apex/BearController.getAllBears';
export default class BearList extends LightningElement {
    bears;
    error;
    appResources = {
        bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
    };
    connectedCallback() {
        this.loadBears();
    }
    loadBears() {
        getAllBears()
            .then(result => {
                this.bears = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
}