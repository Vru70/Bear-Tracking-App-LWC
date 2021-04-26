/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 04-26-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-26-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
// Import Bear object fields
import SUPERVISOR_FIELD from '@salesforce/schema/Bear__c.Supervisor__c';
const bearFields = [SUPERVISOR_FIELD];
export default class BearSupervisor extends LightningElement {
    @api recordId; // Bear Id
    @wire(getRecord, { recordId: '$recordId', fields: bearFields })
    bear;
    get supervisorId() {
        return getFieldValue(this.bear.data, SUPERVISOR_FIELD);
    }
}