
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
    title: string;
    heading: string;
    headerImageString: string;
    authorId: number;
}

export interface UpdateCollectionInput {
    id: number;
    authorId: number;
    title: string;
    heading: string;
    headerImageString: string;
}

export interface CreateNavHeadingInput {
    blogTitle: string;
    authorId: number;
}

export interface UpdateNavHeadingInput {
    id: number;
    blogTitle: string;
    authorId: number;
}

export interface CreateNavMemberInput {
    collectionId: number;
    title: string;
    content: JSON;
}

export interface UpdateNavMemberInput {
    id: number;
    title: string;
    content: JSON;
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
    email: string;
    password: string;
    owner: boolean;
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
    collectionWithPosts(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;
    collectionByUser(authorId: number): Nullable<Collection>[] | Promise<Nullable<Collection>[]>;
    navHeadings(): Nullable<Nullable<NavHeading>[]> | Promise<Nullable<Nullable<NavHeading>[]>>;
    navHeading(id: number): Nullable<NavHeading> | Promise<Nullable<NavHeading>>;
    navMembers(): Nullable<Nullable<NavMember>[]> | Promise<Nullable<Nullable<NavMember>[]>>;
    navMember(id: number): Nullable<NavMember> | Promise<Nullable<NavMember>>;
    navMembersInHeading(collectionId: number): Nullable<Nullable<NavMember>[]> | Promise<Nullable<Nullable<NavMember>[]>>;
    posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    post(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    postsInCollection(collectionId: number): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    postsByCollectionTitle(collectionTitle: string): Nullable<Post>[] | Promise<Nullable<Post>[]>;
    users(): Nullable<User>[] | Promise<Nullable<User>[]>;
    user(id: number): Nullable<User> | Promise<Nullable<User>>;
    collectionsOfOwner(): User | Promise<User>;
}

export interface IMutation {
    createAuth(createAuthInput: CreateAuthInput): Token | Promise<Token>;
    updateAuth(updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;
    removeAuth(id: number): Nullable<Auth> | Promise<Nullable<Auth>>;
    createCollection(createCollectionInput: CreateCollectionInput): Collection | Promise<Collection>;
    upsertCollection(updateCollectionInput: UpdateCollectionInput): Collection | Promise<Collection>;
    updateCollection(updateCollectionInput: UpdateCollectionInput): Collection | Promise<Collection>;
    removeCollection(id: number): Nullable<Collection> | Promise<Nullable<Collection>>;
    createNavHeading(createNavHeadingInput: CreateNavHeadingInput): NavHeading | Promise<NavHeading>;
    updateNavHeading(updateNavHeadingInput: UpdateNavHeadingInput): NavHeading | Promise<NavHeading>;
    upsertNavHeading(updateNavHeadingInput: UpdateNavHeadingInput): NavHeading | Promise<NavHeading>;
    removeNavHeading(id: number): Nullable<NavHeading> | Promise<Nullable<NavHeading>>;
    createNavMember(createNavMemberInput: CreateNavMemberInput): NavMember | Promise<NavMember>;
    updateNavMember(updateNavMemberInput: UpdateNavMemberInput): NavMember | Promise<NavMember>;
    removeNavMember(id: number): Nullable<NavMember> | Promise<Nullable<NavMember>>;
    createPost(createPostInput: CreatePostInput): Post | Promise<Post>;
    updatePost(updatePostInput: UpdatePostInput): Post | Promise<Post>;
    removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;
    createUser(createUserInput: CreateUserInput): User | Promise<User>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
    removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export interface Collection {
    id: number;
    title: string;
    heading: string;
    headerImageString: string;
    posts?: Nullable<Nullable<Post>[]>;
    author: User;
    authorId: number;
    timestamp: Date;
}

export interface NavHeading {
    id: number;
    blogTitle: string;
    navRow: Nullable<NavMember>[];
    author: User;
    authorId: number;
}

export interface NavMember {
    id: number;
    title: string;
    content: JSON;
    navHeading: NavHeading;
    collectionId: number;
}

export interface Post {
    id: number;
    timestamp?: Nullable<Date>;
    title?: Nullable<string>;
    content?: Nullable<JSON>;
    published?: Nullable<boolean>;
    collection?: Nullable<Collection>;
    collectionId?: Nullable<number>;
}

export interface User {
    id: number;
    name?: Nullable<string>;
    email: string;
    password: string;
    owner: boolean;
    posts?: Nullable<Nullable<Post>[]>;
    collections?: Nullable<Nullable<Collection>[]>;
}

export type JSON = any;
type Nullable<T> = T | null;
