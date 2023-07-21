import {NextResponse} from "next/server";
import {MongoClient, ObjectId} from 'mongodb';
// take this from env file
const uri = "mongodb+srv://sidmadalina:xxxx@cluster0.m4zswcc.mongodb.net/?retryWrites=true&w=majority"

//can create a separate file services for connection function
const connection = async () => {
        const client = await MongoClient.connect(uri);
        return client.db("EventsAPP");
}
export async function GET() {
        const db = await connection();

        const res = await db
            .collection("Events")
            .find({})
            .sort({'startDate': 1})
            .toArray();

        const data = await res;
        return NextResponse.json({ data })
};
export async function PUT(request: Request) {
        const res = await request.json()
        const db = await connection();
        const dataResponse = await db
            .collection("Events")
            .updateOne(
                { _id: new ObjectId(res.id) },
                { $set: { subscribe: res.subscribe } },
            );
        return NextResponse.json({ dataResponse })
}
