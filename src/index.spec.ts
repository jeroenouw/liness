import sinon from 'sinon';
import { expect } from 'chai';
import { index } from './index';
import * as logger from './utils/logger.util';
import * as timer from './utils/timer.util';
import * as info from './liness';
import { Info } from './models/info';

describe('src/index', () => {
    let sandbox: sinon.SinonSandbox;
    let showTitleAndBannerStub: sinon.SinonStub;
    let showStartCheckingStub: sinon.SinonStub;

    let showTotalLinesStub: sinon.SinonStub;
    let showWrittenLinesStub: sinon.SinonStub;
    let showEmptyLinesStub: sinon.SinonStub;
    let showTotalFilesStub: sinon.SinonStub;

    let timerOnStub: sinon.SinonStub;
    let getInfoStub: sinon.SinonStub;

    const infoMockData: Info = {
        lineInfo: {
            total: 373,
            empty: 100,
            written: 273,
        },
        fileInfo: 10,
    }

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
      sandbox.restore();
    });

    it('should always show all information', () => {
        const initialTime = timer.timerOn();

        showTitleAndBannerStub = sandbox.stub(logger, 'showTitleAndBanner');
        showStartCheckingStub = sandbox.stub(logger, 'showStartChecking');

        timerOnStub = sandbox.stub(timer, 'timerOn').returns(initialTime);
        getInfoStub = sandbox.stub(info, 'getInfo').returns(infoMockData);

        showTotalLinesStub = sandbox.stub(logger, 'showTotalLines');
        showWrittenLinesStub = sandbox.stub(logger, 'showWrittenLines');
        showEmptyLinesStub = sandbox.stub(logger, 'showEmptyLines');
        showTotalFilesStub = sandbox.stub(logger, 'showTotalFiles');

        index();
        expect(showTitleAndBannerStub).to.be.calledOnce;
        expect(showStartCheckingStub).to.be.calledOnce;

        expect(timerOnStub).to.be.calledOnce;
        expect(getInfoStub).to.be.calledOnce;

        expect(showTotalLinesStub).to.be.calledOnceWithExactly(infoMockData);
        expect(showWrittenLinesStub).to.be.calledOnceWithExactly(infoMockData);
        expect(showEmptyLinesStub).to.be.calledOnceWithExactly(infoMockData);
        expect(showTotalFilesStub).to.be.calledOnceWithExactly(infoMockData, initialTime);
    });
});
