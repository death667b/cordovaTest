/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener("volumeupbutton", callbackFunction, false); 
        document.addEventListener("backbutton", onBackKeyDown, false); 
        window.addEventListener("batterystatus", onBatteryStatus, false);

        document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage); 
        document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage); 
        document.getElementById("removeProjectFromLocalStorage").addEventListener("click", removeProjectFromLocalStorage); 
        document.getElementById("getLocalStorageByKey").addEventListener("click", getLocalStorageByKey);  

        var localStorage = window.localStorage; 
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function setLocalStorage() { 
   localStorage.setItem("Name", "John"); 
   localStorage.setItem("Job", "Developer"); 
   localStorage.setItem("Project", "Cordova Project"); 
} 

function showLocalStorage() { 
   console.log(localStorage.getItem("Name")); 
   console.log(localStorage.getItem("Job")); 
   console.log(localStorage.getItem("Project")); 
} 

function removeProjectFromLocalStorage() {
   localStorage.removeItem("Project");
}

function getLocalStorageByKey() {
   console.log(localStorage.key(0));
}
 
function callbackFunction() { 
   alert('Volume Up Button is pressed!');
}
 
function onBackKeyDown(e) { 
   e.preventDefault(); 
   alert('Back Button is Pressed!'); 
}

function onBatteryStatus(info) { 
   alert("BATTERY STATUS:  Level: " + info.level + " isPlugged: " + info.isPlugged); 
}