import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import * as path from 'path'
import { ServeStaticModule } from "@nestjs/serve-static";

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://root:root12345@cluster0.2bve0.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule,
        FileModule,
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static'),})
    ]
})
export class AppModule {

}
