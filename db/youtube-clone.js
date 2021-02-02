/*
 Navicat Premium Data Transfer

 Source Server         : local-mongo
 Source Server Type    : MongoDB
 Source Server Version : 40403
 Source Host           : localhost:27017
 Source Schema         : youtube-clone

 Target Server Type    : MongoDB
 Target Server Version : 40403
 File Encoding         : 65001

 Date: 02/02/2021 20:20:05
*/


// ----------------------------
// Collection structure for comments
// ----------------------------
db.getCollection("comments").drop();
db.createCollection("comments");

// ----------------------------
// Documents of comments
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("youtube-clone");
db.getCollection("comments").insert([ {
    _id: ObjectId("6017f3f02a2d2f11ef32a147"),
    content: "Lorem irure in eiusmod dolor",
    user: ObjectId("60122d2b09a363365c5e236c"),
    video: ObjectId("6017d4ca7b26690e10e61430"),
    createdAt: ISODate("2021-02-01T12:28:32.673Z"),
    updatedAt: ISODate("2021-02-01T12:28:32.673Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("6017f40f2a2d2f11ef32a148"),
    content: "eiusmod nostrud sit qui",
    user: ObjectId("60122d2b09a363365c5e236c"),
    video: ObjectId("6017d4ca7b26690e10e61430"),
    createdAt: ISODate("2021-02-01T12:29:03.848Z"),
    updatedAt: ISODate("2021-02-01T12:29:03.848Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for subscriptions
// ----------------------------
db.getCollection("subscriptions").drop();
db.createCollection("subscriptions");

// ----------------------------
// Documents of subscriptions
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("youtube-clone");
db.getCollection("subscriptions").insert([ {
    _id: ObjectId("6012771e0f8a704996efeee1"),
    user: ObjectId("60122d2b09a363365c5e236c"),
    channel: ObjectId("60122d7d09a363365c5e236d"),
    createdAt: ISODate("2021-01-28T08:34:38.25Z"),
    updatedAt: ISODate("2021-01-28T08:34:38.25Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("youtube-clone");
db.getCollection("users").insert([ {
    _id: ObjectId("60122d2b09a363365c5e236c"),
    avatar: 1,
    cover: 2,
    channelDescription: 3,
    subscribersCount: NumberInt("0"),
    username: "lpz",
    email: "lpzmail@163.com",
    password: "e10adc3949ba59abbe56e057f20f883e",
    createdAt: ISODate("2021-01-28T03:19:07.04Z"),
    updatedAt: ISODate("2021-01-28T03:19:07.04Z"),
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("60122d7d09a363365c5e236d"),
    avatar: 1,
    cover: 2,
    channelDescription: 3,
    subscribersCount: NumberInt("1"),
    username: "jack",
    email: "jack@jack.com",
    password: "e10adc3949ba59abbe56e057f20f883e",
    createdAt: ISODate("2021-01-28T03:20:29.635Z"),
    updatedAt: ISODate("2021-01-28T03:20:29.635Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for videolikes
// ----------------------------
db.getCollection("videolikes").drop();
db.createCollection("videolikes");

// ----------------------------
// Documents of videolikes
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("youtube-clone");
db.getCollection("videolikes").insert([ {
    _id: ObjectId("6018e7a6a8334419196efd1b"),
    user: ObjectId("60122d2b09a363365c5e236c"),
    video: ObjectId("6017cd9812651f0d3dd5bfe0"),
    like: NumberInt("1"),
    createdAt: ISODate("2021-02-02T05:48:22.994Z"),
    updatedAt: ISODate("2021-02-02T05:48:22.994Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();

// ----------------------------
// Collection structure for videos
// ----------------------------
db.getCollection("videos").drop();
db.createCollection("videos");

// ----------------------------
// Documents of videos
// ----------------------------
session = db.getMongo().startSession();
session.startTransaction();
db = session.getDatabase("youtube-clone");
db.getCollection("videos").insert([ {
    _id: ObjectId("6017c0066a42260b1641d7ec"),
    commentsCount: NumberInt("0"),
    dislikesCount: NumberInt("0"),
    likesCount: NumberInt("0"),
    videoId: "205d2ec1ad3f4874b39f51e87f1faaef",
    user: ObjectId("60122d2b09a363365c5e236c"),
    createdAt: ISODate("2021-02-01T08:47:02.162Z"),
    updatedAt: ISODate("2021-02-01T08:47:02.162Z"),
    __v: NumberInt("0"),
    viewsCount: 0,
    description: 22,
    title: 11
} ]);
db.getCollection("videos").insert([ {
    _id: ObjectId("6017cd9812651f0d3dd5bfe0"),
    commentsCount: NumberInt("0"),
    dislikesCount: NumberInt("0"),
    likesCount: NumberInt("1"),
    viewsCount: NumberInt("0"),
    videoId: "f02b6b07ae5c4864ac097fe65177459a",
    user: ObjectId("60122d2b09a363365c5e236c"),
    createdAt: ISODate("2021-02-01T09:44:56.769Z"),
    updatedAt: ISODate("2021-02-01T09:44:56.769Z"),
    __v: NumberInt("0"),
    description: 44,
    title: 33
} ]);
db.getCollection("videos").insert([ {
    _id: ObjectId("6017d4ca7b26690e10e61430"),
    commentsCount: NumberInt("3"),
    dislikesCount: NumberInt("0"),
    likesCount: NumberInt("0"),
    viewsCount: NumberInt("0"),
    title: "fugiat eu velit dolor officia",
    description: "ut aliquip voluptate fugiat aute",
    videoId: "8e8ef6ee3e05499a9e8959ada6d2eacd",
    user: ObjectId("60122d2b09a363365c5e236c"),
    createdAt: ISODate("2021-02-01T10:15:38.291Z"),
    updatedAt: ISODate("2021-02-01T10:15:38.291Z"),
    __v: NumberInt("0")
} ]);
session.commitTransaction(); session.endSession();
