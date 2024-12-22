# Synergy - Educational Infrastructure Management Platform

![Synergy Logo](https://github.com/user-attachments/assets/fa28b03a-90d9-41a0-adde-92d2f7a63274)


Synergy is a comprehensive web platform designed to help educational institutions, administrators, and policymakers manage and standardize school infrastructure across India. The platform features automated data collection through UDISE integration, providing seamless analysis and resource management capabilities.

## 🎯 Features

### 🏫 Know Your School
- Advanced search functionality using PIN code, UDISE ID, or school name
- Comprehensive filtering system for categories, structures, states, and grade levels
- Detailed school information including facilities and performance metrics

### 📊 School Comparison
- Side-by-side comparison of multiple schools
- Evaluation based on quality scores, student numbers, and infrastructure
- Facility comparison including libraries, labs, and sports facilities

### 🤖 Automated Data Analysis
- Automatic data retrieval from UDISE database using school's UDISE ID
- Real-time data scraping and synchronization
- Structure analysis using machine learning
- Alignment checking with Samagra Shiksha and UDISE frameworks
- Automated monthly data updates without manual form submission

### 📈 Standardization Support
- Step-by-step transformation guides
- Interactive training modules
- Resource planning calculator
- Transition plan templates
- Compliance checklists

### 📱 Progress Monitoring
- Real-time standardization tracking
- Performance metrics and analytics
- National and regional progress visualization
- Automated report generation

### 💡 Resource Management
- Resource allocation optimization
- Gap analysis tools
- Performance tracking

### 👥 Stakeholder Engagement
- Discussion forums and surveys
- Event management
- Policy update notifications
- Achievement tracking
- Stakeholder directory

## 🛠️ Tech Stack

- Frontend: 
  - React.js with TypeScript
  - TailwindCSS
  - Material-UI

- Backend: 
  - Node.js/Express.js
  - Python/Flask
  - Selenium for web scraping
  - BeautifulSoup4 for data parsing
  - Pandas for data processing

- Database:
  - MongoDB with Mongoose

- AI/ML:
  - TensorFlow.js
  - Scikit-learn
  - NumPy

- Cloud & Storage:
  - AWS
  - Cloudinary

- Authentication:
  - JWT

## 📋 Requirements

- Node.js 14.x or higher
- Python 3.8 or higher
- MongoDB 4.x or higher
- NPM 6.x or higher
- Modern web browser
- Minimum 4GB RAM
- Internet connection

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/DvshG/Synergy.git
cd Synergy
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Install Python dependencies:
```bash
pip install -r requirements.txt
```

4. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration including UDISE API credentials
```

5. Start the development servers:
```bash
# Start Node.js server
npm run dev:server

# Start Python scraping service
python scraper_service.py

# Start frontend
npm run dev
```

## 💻 Usage

### User Roles

1. **Super Admin**
   - System maintenance
   - School registration approval
   - Content management

2. **School Admin**
   - Login with UDISE ID for automatic data sync
   - Resource requests
   - Progress tracking

3. **Normal User**
   - School search
   - Resource access
   - Forum participation

### Automated Data Collection

1. School admin logs in with UDISE ID
2. System automatically fetches latest data from UDISE
3. Data is processed and analyzed
4. Reports and recommendations are generated automatically
5. Monthly updates occur without manual intervention

## 🤝 Contributing

We welcome contributions to Synergy! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, please email support@synergy.edu or join our [Discord community](https://discord.gg/synergy).

---

Made with ❤️ by the Synergy Team
