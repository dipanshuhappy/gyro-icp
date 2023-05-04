import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Coordinates { 'latitude' : string, 'longitude' : string }
export interface Driver {
  'car' : string,
  'driverLicense' : string,
  'vehicleLicense' : string,
}
export interface Ride {
  'dropLocationCoordinates' : Coordinates,
  'fare' : number,
  'pickUpLocationCoordinates' : Coordinates,
  'user' : [] | [Principal],
  'distance' : bigint,
  'dropLocation' : string,
  'pickUpLocation' : string,
}
export type Status = { 'Driver' : null } |
  { 'User' : null };
export interface User {
  'status' : Status,
  'mobileNumber' : string,
  'email' : string,
  'lastName' : string,
  'firstName' : string,
}
export interface _SERVICE {
  'bookRide' : ActorMethod<[Ride], undefined>,
  'getUserDetails' : ActorMethod<[], [] | [User]>,
  'getUserDetailsFromPrincipalText' : ActorMethod<[string], [] | [User]>,
  'registerDriver' : ActorMethod<[Driver, string], undefined>,
  'registerUser' : ActorMethod<[User, string], undefined>,
  'whoami' : ActorMethod<[], Principal>,
}
