"use strict";

function AjaxStorage() {
    var self = this;

    self.hashStorage = {};

    $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
        {type: "POST", cache: false, dataType: "json",
            data: {status: "READ", owner: "Filipev_Valery_Storage"}, success: dataLoadedRead, error: errorHandler}
    );

    function dataLoadedRead(data) {
        if (data !== " ") {
            self.hashStorage = JSON.parse(data.result);

            alert("dataLoadedRead - " + data.result);

        } else if (data === " ") {
            $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
                {type: "POST", cache: false, dataType: "json", data: {status: "INSERT", owner: "Filipev_Valery_Storage",
                    storage: JSON.stringify(self.hashStorage)}, success: dataLoadedInsert, error: errorHandler}
            );

            function dataLoadedInsert(data) {
                alert("dataLoadedInsert - " + data.result);
            }
        }
    }

    self.addValue = function(key, value) {
        self.hashStorage[key] = value;

        addValueOnTheServer(self.hashStorage);

    };

    self.getValue = function(key) {
        if (key in self.hashStorage) {
            return self.hashStorage[key];
        } else {
            return undefined;
        }
    };

    self.deleteValue = function(key) {
        if (key in self.hashStorage) {
            delete self.hashStorage[key];

            addValueOnTheServer(self.hashStorage);

            return true;
        } else {
            return false;
        }
    };

    self.getKeys = function() {
        var keys = [];
        for (var key in self.hashStorage) {
            keys.push(" " + key);
        }

        return keys;
    };

    // save data into server
    function addValueOnTheServer(hash) {
        var password = Math.random();

        $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
            {type: "POST", cache: false, dataType: "json", data: {status: "LOCK", owner: "Filipev_Valery_Storage",
                password: password}, success: dataLoadedLockget, error: errorHandler}
        );

        function dataLoadedLockget(data) {
            alert("dataLoadedLockget - " + data.result);

            $.ajax("http://fe.it-academy.by/AjaxStringStorage2.php",
                {type: "POST", cache: false, dataType: "json", data: {status: "UPDATE", owner: "Filipev_Valery_Storage",
                    password: password, storage: JSON.stringify(hash)}, success: dataLoadedUpdate, error: errorHandler}
            );

            function dataLoadedUpdate(data) {
                alert("DataLoadedUpdate - " + data.result);
            }
        }
    }

    function errorHandler(StatusStr, ErrorStr) {
        alert(StatusStr + " " + ErrorStr);
    }
}