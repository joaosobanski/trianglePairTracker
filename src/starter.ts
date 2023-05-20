
import trackAll from "./controller/tracking.controller";
import { collections, connectToDatabase } from "./middleware/database";
import { initPromises } from "./middleware/promises";
import logger from "./utils/logger";
import { sleep } from "./utils/sleep";


class Application {
    public async init(): Promise<void> {
        await this.setUpDatabase();
        logger.info("StartUp Application!");
        await sleep(1000);
        this.startTracking();


    }

    private async setUpDatabase(): Promise<void> {
        await connectToDatabase();
    }

    private async startTracking(): Promise<void> {
        await trackAll();
    }

}

export default Application