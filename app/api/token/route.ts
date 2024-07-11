import { StreamChat } from 'stream-chat';
require('dotenv').config();

export async function POST(request: Request) {
    const serverClient = StreamChat.getInstance(
        'be8t22kqvcaj',
        process.env.STREAM_SECRET
    );
    const body = await request.json();
    console.log('[/api/token] Body:', body);

    const userId = body?.userId;

    if (!userId) {
        return Response.error();
    }

    const token = serverClient.createToken(userId);

    const response = {
        userId: userId,
        token: token,
    };

    return Response.json(response);

}