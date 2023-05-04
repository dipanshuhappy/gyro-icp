export const idlFactory = ({ IDL }) => {
  const Coordinates = IDL.Record({
    'latitude' : IDL.Text,
    'longitude' : IDL.Text,
  });
  const Ride = IDL.Record({
    'dropLocationCoordinates' : Coordinates,
    'fare' : IDL.Float64,
    'pickUpLocationCoordinates' : Coordinates,
    'user' : IDL.Opt(IDL.Principal),
    'distance' : IDL.Nat,
    'dropLocation' : IDL.Text,
    'pickUpLocation' : IDL.Text,
  });
  const Status = IDL.Variant({ 'Driver' : IDL.Null, 'User' : IDL.Null });
  const User = IDL.Record({
    'status' : Status,
    'mobileNumber' : IDL.Text,
    'email' : IDL.Text,
    'lastName' : IDL.Text,
    'firstName' : IDL.Text,
  });
  const Driver = IDL.Record({
    'car' : IDL.Text,
    'driverLicense' : IDL.Text,
    'vehicleLicense' : IDL.Text,
  });
  return IDL.Service({
    'bookRide' : IDL.Func([Ride], [], []),
    'getUserDetails' : IDL.Func([], [IDL.Opt(User)], ['query']),
    'getUserDetailsFromPrincipalText' : IDL.Func(
        [IDL.Text],
        [IDL.Opt(User)],
        ['query'],
      ),
    'registerDriver' : IDL.Func([Driver, IDL.Text], [], []),
    'registerUser' : IDL.Func([User, IDL.Text], [], []),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
