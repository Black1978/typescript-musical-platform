import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { TrackModule } from "./track/track.module";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:*********@cluster0.2bve0.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule
    ]
})
export class AppModule {

}
