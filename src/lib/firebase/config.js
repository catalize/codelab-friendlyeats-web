const config = {
  apiKey: "AIzaSyBbZD6KfBB_S2gGN64JyG2WVUIGb82IK-w",
  authDomain: "friendlyeats-web-afa2a.firebaseapp.com",
  projectId: "friendlyeats-web-afa2a",
  storageBucket: "friendlyeats-web-afa2a.appspot.com",
  messagingSenderId: "265604648529",
  appId: "1:265604648529:web:ef7f7279ccba3449257270",
  measurementId: "G-BXHWHK7R3E"
};

// When deployed, there are quotes that need to be stripped
Object.keys(config).forEach((key) => {
  const configValue = config[key] + "";
  if (configValue.charAt(0) === '"') {
    config[key] = configValue.substring(1, configValue.length - 1);
  }
});

export const firebaseConfig = config;
