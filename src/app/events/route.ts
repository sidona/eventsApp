import {NextResponse} from "next/server";
import {MongoClient, ObjectId} from 'mongodb';
const uri = "mongodb+srv://sidmadalina:xxxxx@cluster0.m4zswcc.mongodb.net/?retryWrites=true&w=majority"
export async function GET() {

        const client = await MongoClient.connect(uri);
        const db = client.db("EventsAPP");

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
        const client = await MongoClient.connect(uri);
        const db = client.db("EventsAPP");
        const dataResponse = await db
            .collection("Events")
            .updateOne(
                { _id: new ObjectId(res.id) },
                { $set: { subscribe: res.subscribe } },
            );
        return NextResponse.json({ dataResponse })
}
