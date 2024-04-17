import { AllInOnePrinter } from "./allInOneMachine";
import { SimplePrinter } from "./printer";
import { SimpleScanner } from "./scanner";

const allInOne = new AllInOnePrinter();
allInOne.scanDocument();
allInOne.printDocument();
allInOne.sendFax();

const simplePrinter = new SimplePrinter();
simplePrinter.printDocument();

const simpleScanner = new SimpleScanner();
simpleScanner.scanDocument();
