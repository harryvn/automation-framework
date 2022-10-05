# A bare minimum automation framework

# Table of Contents

1. [Standalone Execution](#change-directory)
2. [Execution using PM2](#pm2-implementation)

---

<br>

### Change Directory
```javascript
cd e2e
``` 

---

### Install Package Dependencies
```javascript
npm install
```

---

### Install Browser Driver Dependencies
```javascript
npm run setup
```

![npm-run-setup](https://user-images.githubusercontent.com/4848094/189416696-dff14c4b-608e-45ab-bee2-734adec165d4.gif)

---

### Start Selenium-Standalone Server
```javascript
npm start
```

![npm-start](https://user-images.githubusercontent.com/4848094/189416764-68277dd1-1142-48da-84d0-3bd418742def.gif)

---

### Execute Test Cases
```javascript
npm test
```

The above command will:
- open browser
- execute test cases
- generate HTML report

<br>

Console Output
![npm-test](https://user-images.githubusercontent.com/4848094/189416927-8dbafdde-3698-445b-aae9-7cda3e7af06b.gif)

Execution in Action

`Note: This is a sample login page, if you want to know more check out this at` [GitHub](https://github.com/saucelabs/the-internet)
![npm-test-running](https://user-images.githubusercontent.com/4848094/189417641-1ea9698c-fdd7-419a-9d22-c2f840c3c6e9.gif)

HTML Report
![report](https://user-images.githubusercontent.com/4848094/189417711-ed52fdc8-2b23-4236-b5a5-fdb9ca034d4c.jpg)

---

<br>

# PM2 Implementation

### Install Dependency

```javascript
npm install -g pm2
```

---

### Start Server

```javascript
pm2 start ecosystem.config.js
```
![image](https://user-images.githubusercontent.com/4848094/194100702-7b07638b-f214-4f3b-b063-41b49b7b7dc2.png)

`Note: the above command will start the selenium server in the background, you can access it` [here](http://localhost:4444)

![image](https://user-images.githubusercontent.com/4848094/194100940-1c9d9619-5f7c-4cd6-920a-5e4722a07e3b.png)

---

### Run Tests

```javascript
npm test
```

---

### Stop Server

```javascript
pm2 stop ecosystem.config.js
```

![image](https://user-images.githubusercontent.com/4848094/194101095-80773421-6e98-4910-b3d1-2b360406466f.png)

---

### Dispose Server

```javascript
pm2 delete ecosystem.config.js
```

![image](https://user-images.githubusercontent.com/4848094/194101205-d480d094-bc35-4059-85f7-a8f0a892e119.png)

---






