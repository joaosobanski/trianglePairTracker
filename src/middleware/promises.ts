import Web3 from "web3";

export function initPromises() {
    const web3Provider = new Web3.providers.HttpProvider(process.env.RPC as string);
    const web3 = new Web3(web3Provider);

    const router = new web3.eth.Contract(
        require('../abis/router.json'),
        process.env.ROUTER as string
    )

    const factory = new web3.eth.Contract(
        require('../abis/factory.json'),
        process.env.FACTORY as string
    )

    return { router, factory, web3 }
}
