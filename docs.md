```md
# Backend Test - Additional Documentation

## Implemented Features & Changes

### 1️⃣ Added `.gitignore`  
- Ignored `node_modules` to prevent unnecessary files from being tracked.

### 2️⃣ Improved Development Workflow  
- Added a `dev` script in `package.json` for hot reloading using:  
  ```json
  "scripts": {
    "dev": "node --watch server.js"
  }
  ```

### 3️⃣ Refactored Database Configuration  
- **Commented out** deprecated options in `config/database.js`:  
  ```js
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  ```

### 4️⃣ Improved Error Handling for Undefined Routes  
- Modified line 36 in `server.js` to return a **404 error** with the message:  
  ```js
  app.use((req, res) => {
      res.status(404).send('Route not found');
  });
  ```

### 5️⃣ Implemented Game History Retrieval (`/history`)  
- Added an endpoint to fetch saved game results, sorted by date.

### 6️⃣ Refactored Game Data Validation  
- **Created a reusable validation function** (`validateRequiredFields`) in `utils/validation.js`:
  ```js
  exports.validateRequiredFields = (body, requiredFields) => {
      const missingFields = requiredFields.filter(field => body[field] === undefined);
      return missingFields.length > 0 ? missingFields : null;
  };
  ```
- Updated `saveGameData` to use this function, improving error handling.

### 📝 Notes & Questions  
- **Saving game data functionality was already present** when I started. If additional modifications were expected, please clarify.  
- If there are further improvements needed, I’d be happy to make adjustments.

---

## How to Run the Project  

1. Clone the repo:  
   ```bash
   git clone [text](https://github.com/chimdykekamsi/Card-Memory.git)
   ```
2. Navigate into the project directory:  
   ```bash
   cd <project-folder>
   ```
3. Install dependencies:  
   ```bash
   npm install
   ```
4. Start the server:  
   ```bash
   npm run dev
   ```

---