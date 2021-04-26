/**
 * @author            : Vrushabh Uprikar
 * @last modified on  : 04-26-2021
 * @last modified by  : Vrushabh Uprikar
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-26-2021   Vrushabh Uprikar   Initial Version
**/
import { LightningElement } from 'lwc';

export default class HelloWebComponent extends LightningElement
{
    greeting = 'Trailblazer';

    handleGreetingChange(event) {
        this.greeting = event.target.value;
    }

    currentDate = new Date().toDateString();
    get capitalizedGreeting() {
        return `Hello ${this.greeting.toUpperCase()}!`;
    }
}