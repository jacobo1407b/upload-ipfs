import { create } from 'ipfs-http-client';
import axios from 'axios';

function getAuth():string{
    return'Basic ' + Buffer.from(process.env.INFURA_PROYECT_ID+ ':' + process.env.INFURA_PROYECT_SECRET).toString('base64')
}
async function ipfsClient() {
    const ipfs = await create({
        host: process.env.IPFS_HOST,
        port: Number(process.env.IPFS_PORT),
        protocol: process.env.IPFS_PROTOCOL,
        headers: {
            authorization: getAuth()
          }
    });
    return ipfs;
}

async function loadData(buffer:Buffer,uid?:string) {
    let ipfs = await ipfsClient();
    let result = await ipfs.add({
        path: uid,
        content: buffer
    });
    return result;
}

export async function publish(cid:string) {
    const ipfs = await create({
        host: 'ipfs.infura.io',
        port: Number(process.env.IPFS_PORT),
        protocol: process.env.IPFS_PROTOCOL,
        headers: {
            authorization: getAuth()
          }
    });
    return await ipfs.name.publish(cid);
}

export default loadData;
//ipns
//ETIMEDOUT

