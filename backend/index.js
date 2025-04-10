const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

// Import models
const Contact = require("./models/Contact");

// Import routes
const userRoutes = require("./routes/userRoutes");

const app = express();

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:3000", "http://127.0.0.1:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Load environment variables
dotenv.config();

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB Atlas Connection Error:', error.message);
    console.log('\n=== TROUBLESHOOTING INSTRUCTIONS ===');
    console.log('1. Check if your IP address is whitelisted in MongoDB Atlas:');
    console.log('   - Log in to MongoDB Atlas (https://cloud.mongodb.com)');
    console.log('   - Go to Network Access in the left sidebar');
    console.log('   - Click "Add IP Address" and add your current IP');
    console.log('2. Verify your connection string in .env file');
    console.log('3. Check if your MongoDB Atlas username and password are correct');
    console.log('4. Ensure your cluster is running and accessible');
    console.log('=====================================\n');
    
    // Don't exit the process, just log the error
    // This allows the server to continue running even if DB connection fails
  }
};

// Connect to MongoDB
connectDB();

// Routes
app.use("/api/users", userRoutes);

// Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Server is working!" });
});

// Contact form submission route
app.post('/api/contact', async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ 
        error: 'Database connection not available. Please try again later.' 
      });
    }

    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create new contact entry using the imported Contact model
    const contact = await Contact.create({
      name,
      email,
      message
    });

    res.status(201).json({ 
      message: 'Contact form submitted successfully', 
      contact 
    });
  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to submit contact form' 
    });
  }
});

// Get all contact submissions (for admin panel)
app.get('/api/contacts', async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({ 
        error: 'Database connection not available. Please try again later.' 
      });
    }

    // Fetch all contact submissions, sorted by creation date (newest first)
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({ 
      success: true,
      count: contacts.length,
      data: contacts 
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ 
      success: false,
      error: error.message || 'Failed to fetch contact submissions' 
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong! Please try again later.",
  });
});

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
