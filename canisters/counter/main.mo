import HashMap "mo:base/HashMap";
import AssocList "mo:base/AssocList";
import List "mo:base/List";
import Array "mo:base/Array";
import Map "mo:base/HashMap";
import Principal "mo:base/Principal";
import Option "mo:base/Option";

// type UsersMap = AssocList.AssocList<Principal, User>;
// type DriversMap = AssocList.AssocList<Principal, Driver>;

actor {

    type Status = { #Driver; #User };
    type User = {
        status : Status;
        name : Text;
        firstName : Text;
        lastName : Text;
        email : Text;
        mobileNumber : Text
    };
    type Driver = {
        car : Text;
        driverLicense : Text;
        vehicleLicense : Text
    };

    var users = Map.HashMap<Principal, User>(0, Principal.equal, Principal.hash);

    var drivers = Map.HashMap<Principal, User>(0, Principal.equal, Principal.hash);

    private func is_user_registered(principal : Principal) : Bool {
        Option.isSome(users.get(principal))
    };

    public shared ({ caller }) func registerUser(user : User) : async () {
        assert not Principal.isAnonymous(caller);
        assert not is_user_registered(caller);
        users.put(caller, user)
    };
    public query ({ caller }) func getUserDetails() : async ?User {
        users.get(caller)
    };
    public query ({ caller }) func whoami() : async Principal {
        return caller
    }

}
