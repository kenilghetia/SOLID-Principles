import { IFaxMachine } from "./IFaxMachine";
import { IPrinter } from "./IPrinter";
import { IScanner } from "./IScanner";

export class AllInOnePrinter implements IScanner, IPrinter, IFaxMachine {
  scanDocument(): void {
    console.log("Scanning document...");
  }

  printDocument(): void {
    console.log("Printing document...");
  }

  sendFax(): void {
    console.log("Sending fax...");
  }

  receiveFax(): void {
    console.log("Receiving fax...");
  }
}
