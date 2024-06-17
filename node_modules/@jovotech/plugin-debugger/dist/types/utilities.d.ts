/// <reference types="node" />
import { Socket } from 'socket.io-client';
import { Writable } from 'stream';
export declare function propagateStreamAsLog(stream: Writable, socket: typeof Socket): void;
