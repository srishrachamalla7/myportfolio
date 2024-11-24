import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://srishnotebooks:JbpvGNb7FWNLVRFJ@goldrates.vx9zl.mongodb.net/?retryWrites=true&w=majority&appName=Goldrates');

const viewSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
  lastUpdated: { type: Date, default: Date.now }
}, { collection: 'PortfolioViews' });

const ViewModel = mongoose.model('View', viewSchema, 'PortfolioViews');

app.post('/api/views', async (req, res) => {
  try {
    const view = await ViewModel.findOne();
    if (view) {
      view.count += 1;
      view.lastUpdated = Date.now();
      await view.save();
      res.json({ count: view.count });
    } else {
      const newView = new ViewModel({ count: 1 });
      await newView.save();
      res.json({ count: 1 });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/views', async (req, res) => {
  try {
    const view = await ViewModel.findOne();
    res.json({ count: view ? view.count : 0 });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});