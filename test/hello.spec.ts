import chai, {should} from "chai";
import {describe} from "mocha";
import chaiAsPromised from "chai-as-promised";
import {hello} from "../src/index.js";
import sinon, {SinonSandbox, SinonStub} from "sinon";
import stream from 'stream';


chai.use(chaiAsPromised);
chai.should();

describe('Library/function/class', () => {
  let log: SinonStub;
  let sandbox: SinonSandbox;

  beforeEach(() => {
    const output = new stream.Writable({
      write(chunk: any, encoding: any, callback: any) {
        // This callback signals that the write operation is complete.
        // If you don't call it, the stream will hang indefinitely.
        callback();
      }
    });

    sandbox = sinon.createSandbox();
    log = sandbox.stub(console, 'log');

    log.callsFake((...args: any[]) => {
      output.write('Custom log: ' + args.join(' ') + '\n');
    });
  })

  afterEach(() => {
    sandbox.restore();
  })

  it('should call console.log', async () => {
    hello();
    log.calledOnceWith("hello world from hello exported function").should.be.true;
  });

  it('should return output', async () => {
    hello().should.be.equal("hello");
  });
})