
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateAuthInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface UpdateAuthInput {
    id: number;
}

export interface CreateCollectionInput {
    title?: Nullable<string>;
    heading?: Nullable<string>;
    authorId?: Nullable<number>;
}

export interface UpdateCollectionInput {
    id: number;
    title?: Nullable<string>;
    heading?: Nullable<string>;
}

export interface CreatePostInput {
    title?: Nullable<string>;
    content?: Nullable<JSON>;
    collectionId?: Nullable<number>;
}

export interface UpdatePostInput {
    id: number;
    title?: Nullable<string>;
    content?: Nullable<JSON>;
    published?: Nullable<boolean>;
    modified?: Nullable<Date>;
}

export interface CreateUserInput {
    name: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface UpdateUserInput {
    id: number;
}

export interface Auth {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Token {
    token?: Nullable<string>;
}

export interface IQuery {
    auth(createAuthInput: CreateAuthInput): Token | Promise<Token>;
    collections(): Nullable<Collection>[] | Promise<Nullable<Collection>[]>;
    collectionsWithPosts(): Nullable<Collection>[] | Promise<Nullable<Collection>[]>;
    collection(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    postsInCollection(id: number): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface IMutation {
    createAuth(createAuthInput: CreateAuthInput): Token | Promise<Token>;
    updateAuth(updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;
    removeAuth(id: number): Nullable<Auth> | Promise<Nullable<Auth>>;
    createCollection(createCollectionInput: CreateCollectionInput): Collection | Promise<Collection>;
    updateCollection(updateCollectionInput: UpdateCollectionInput): Collection | Promise<Collection>;
    removeCollection(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface Collection {
    id: number;
    title?: Nullable<string>;
    heading?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
    author?: Nullable<User>;
    authorId?: Nullable<number>;
    timestamp?: Nullable<Date>;
}

export interface Post {
    id: number;
    timestamp?: Nullable<Date>;
    title?: Nullable<string>;
    content?: Nullable<JSON>;
    published?: Nullable<boolean>;
    collection?: Nullable<User>;
    collectionId?: Nullable<number>;
}

export interface User {
    id: number;
    name: string;
    email?: Nullable<string>;
    password?: Nullable<string>;
    posts?: Nullable<Nullable<Post>[]>;
}

export type JSON = any;
type Nullable<T> = T | null;
