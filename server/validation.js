"use strict";
exports.__esModule = true;
exports.validate = void 0;
exports.validate = {
    post: function (o) {
        if (o.hoot.trim().length != 0 && o.hoot.trim().length < 500) {
            var obj = {
                hooter: o.hooter,
                hoot: o.hoot.trim(),
                created: new Date()
            };
            return obj;
        }
        else
            return;
    },
    user: function (u) {
        if (u.user_name.trim() != "" &&
            u.display_name.trim() != "" &&
            u.birth_date.trim() != "") {
            var obj = {
                user_name: u.user_name,
                display_name: u.display_name,
                birth_date: u.birth_date,
                join_date: u.join_date,
                bio: "We don't know anything about " + u.display_name + ", but we're sure they're great.",
                profile_picture_uri: "",
                profile_banner_uri: "",
                location: "",
                hoots: [],
                listeners: []
            };
            return obj;
        }
    }
};
