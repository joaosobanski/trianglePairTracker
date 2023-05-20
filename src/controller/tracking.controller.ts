import { Address } from "viem";
import { collections } from "../middleware/database";
import { initPromises } from "../middleware/promises"
import logger from "../utils/logger";
import { sleep } from "../utils/sleep";

const { factory, router, web3 } = initPromises()
let totalPairs = 0;
async function trackAll() {
    totalPairs = await factory.methods.allPairsLength().call() as number

    let index = 0 as number;

    console.log(totalPairs)

    while (index < totalPairs) {
        await fetch(index)
        await sleep(1)

        index++;
    }
}

async function fetch(index: number) {
    logger.warn({ index }, "Sync")
    while (true)
        try {
            const addressPair = await factory.methods.allPairs(index).call() as Address;
            const pair = new web3.eth.Contract(require('../abis/pair.json'), addressPair);

            const has = await collections.tokens?.findOne({ pair: addressPair })

            if (!has) {
                const token0 = await pair.methods.token0().call();
                const token1 = await pair.methods.token1().call();
                collections.tokens?.insertOne({ pair: addressPair, token: token0 })
                collections.tokens?.insertOne({ pair: addressPair, token: token1 })
            }
            logger.info("Fetched")
            break;
        } catch {
            logger.error({ index }, 'error')
            await sleep(1000)
        }
}


export default trackAll