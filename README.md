# AI-First CRM HCP-Interaction Module

![Python](https://img.shields.io/badge/Python-3.11-blue?logo=python&logoColor=white)
![AI/NLP](https://img.shields.io/badge/AI-NLP-brightgreen)
![LLM](https://img.shields.io/badge/LLM-Powered-orange)
![Status](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Project Description

An intelligent Customer Relationship Management (CRM) system designed for Healthcare Professional (HCP) engagement in the pharmaceutical industry. This AI-powered platform leverages Large Language Models (LLMs) and Natural Language Processing (NLP) to automate, optimize, and personalize interactions with healthcare providers, enabling pharmaceutical sales teams to deliver timely, relevant, and compliant engagement strategies.

The system combines advanced AI capabilities with traditional CRM functionality to create a next-generation platform that transforms how pharmaceutical companies connect with HCPs, providing intelligent insights, automated workflows, and data-driven decision-making capabilities.

## Features

### Core Functionality
- **Intelligent HCP Interaction Logging**: Automated capture and documentation of all HCP touchpoints with AI-enhanced context understanding
- **AI-Powered Interaction Analysis**: Natural language processing of interaction data to extract insights and sentiment
- **Dynamic Follow-up Recommendations**: LLM-generated next-best-action suggestions based on interaction history and HCP preferences
- **Compliance Monitoring**: Automated regulatory compliance checking for pharmaceutical industry standards
- **Interaction History Tracking**: Comprehensive timeline of all HCP engagements with intelligent search and filtering
- **Smart Interaction Editing**: AI-assisted editing capabilities for refining and optimizing interaction records

### AI/ML Capabilities
- **LLM-Based Text Generation**: Context-aware content generation for personalized HCP communications
- **Natural Language Understanding**: Advanced NLP for parsing and understanding interaction notes
- **Sentiment Analysis**: Real-time sentiment detection from HCP interactions
- **Predictive Analytics**: ML-driven insights for optimal engagement timing and channel selection
- **Conversation Intelligence**: AI agents that analyze interaction patterns and suggest improvements

### User Experience
- **Modern React Frontend**: Responsive, intuitive user interface for seamless interaction management
- **Real-time Data Sync**: Live updates and synchronization across all user sessions
- **Multi-channel Support**: Unified platform for tracking in-person, virtual, email, and event-based interactions
- **Mobile-Ready Design**: Optimized for field representatives using tablets and mobile devices

## Techniques Used

### Natural Language Processing (NLP)
- **Text Classification**: Categorizing interactions by type, sentiment, and priority
- **Named Entity Recognition (NER)**: Extracting key entities (HCP names, medications, medical conditions)
- **Semantic Analysis**: Understanding context and intent from unstructured interaction notes
- **Text Summarization**: Generating concise summaries of lengthy interaction records
- **Sentiment Detection**: Analyzing emotional tone and engagement quality

### Prompt Engineering
- **Few-Shot Learning**: Crafting prompts with examples for consistent LLM outputs
- **Chain-of-Thought Reasoning**: Multi-step prompting for complex analysis tasks
- **Context-Aware Prompting**: Dynamic prompt construction based on interaction history
- **Role-Based Prompting**: Specialized prompts for different pharmaceutical sales scenarios
- **Output Formatting**: Structured prompts ensuring consistent JSON/data outputs

### LLM-based Text Generation
- **Personalized Communication**: Generating tailored emails and messages for HCP outreach
- **Interaction Summaries**: Automated generation of meeting notes and call summaries
- **Follow-up Recommendations**: AI-generated suggestions for next steps and action items
- **Content Suggestions**: Smart recommendations for relevant medical information and resources
- **Compliance Checks**: LLM-powered validation of content against regulatory guidelines

## Tech Stack

### Programming Language
- **Python 3.11**: Core backend development language

### Backend Framework & Libraries
- **FastAPI**: Modern, high-performance web framework for building APIs
- **Pydantic**: Data validation and settings management using Python type annotations
- **SQLAlchemy**: SQL toolkit and Object-Relational Mapping (ORM)
- **LangGraph**: Framework for building stateful, multi-actor applications with LLMs

### Frontend Technologies
- **React 18**: JavaScript library for building user interfaces
- **Vite**: Next-generation frontend tooling for fast development
- **CSS3**: Modern styling and responsive design

### AI / ML Technologies
- **Groq API**: High-performance LLM inference API
- **LangChain**: Framework for developing applications powered by language models
- **LangGraph**: Multi-agent orchestration and workflow management
- **Natural Language Processing**: Advanced text processing and analysis

### LLM Details

#### Transformer-Based Large Language Models
This project utilizes state-of-the-art transformer-based Large Language Models for intelligent text processing and generation. The LLMs employed in this system are based on the transformer architecture, which has revolutionized natural language understanding and generation tasks.

**Key LLM Capabilities:**
- Multi-turn conversation understanding
- Context-aware response generation
- Domain-specific pharmaceutical knowledge
- Compliance-aware content creation
- Multi-lingual support for global HCP engagement

#### Configurable LLM Integration
The system is designed with **flexible LLM configuration**, allowing seamless integration with various language model providers. The LLM backend is **fully configurable** through environment variables and configuration files.

**Supported Configuration Options:**
- **Model Selection**: Choose from various LLM models (GPT-4, Claude, Llama, Mixtral, etc.)
- **Provider Flexibility**: Switch between OpenAI, Anthropic, Groq, or local models
- **Temperature Control**: Adjust creativity vs. determinism in responses
- **Token Limits**: Configure maximum response lengths
- **Custom Endpoints**: Support for self-hosted or enterprise LLM deployments

**Configuration Example:**
The LLM can be configured via environment variables or configuration files to use different models and providers based on deployment requirements, cost considerations, or performance needs.

### Database
- **SQLite**: Lightweight, serverless database for development
- **PostgreSQL-ready**: Production-ready architecture supporting PostgreSQL

### Development Tools
- **Git**: Version control
- **Virtual Environment**: Isolated Python environment management
- **npm/Node.js**: JavaScript package management

## Project Structure

```
AI-First-CRM_HCP-Interaction-Module/
│
├── app/
│   ├── __pycache__/           # Python compiled bytecode
│   ├── config.py              # Application configuration
│   ├── database.py            # Database connection and session management
│   └── main.py                # FastAPI application entry point
│
├── models/
│   ├── __pycache__/           # Python compiled bytecode
│   ├── hcp.py                 # HCP (Healthcare Professional) data model
│   ├── interaction.py         # Interaction data model
│   └── interaction_history.py # Interaction history tracking model
│
├── services/
│   ├── __pycache__/           # Python compiled bytecode
│   ├── groq_client.py         # Groq LLM API client integration
│   └── langgraph_agent.py     # LangGraph agent orchestration
│
├── tools/
│   ├── __pycache__/           # Python compiled bytecode
│   ├── compliance_tool.py     # Compliance checking functionality
│   ├── edit_interaction_tool.py   # Interaction editing tool
│   ├── followup_tool.py       # Follow-up recommendation generator
│   └── log_interaction_tool.py    # Interaction logging tool
│
├── src/
│   ├── assets/                # Frontend static assets
│   ├── App.css                # Application styles
│   ├── App.jsx                # Main React application component
│   ├── index.css              # Global styles
│   └── main.jsx               # React application entry point
│
├── venv/                      # Python virtual environment
├── package.json               # Node.js dependencies
├── requirements.txt           # Python dependencies
└── README.md                  # Project documentation
```

## Installation Steps

### Prerequisites
- Python 3.11 or higher
- Node.js 16 or higher
- npm or yarn package manager
- Git

### Backend Setup

1. **Clone the Repository**
```bash
git clone https://github.com/sroy3333/AI-First-CRM_HCP-Interaction-Module.git
cd AI-First-CRM_HCP-Interaction-Module
```

2. **Create Virtual Environment**
```bash
python -m venv venv
```

3. **Activate Virtual Environment**
- Windows:
```bash
venv\Scripts\activate
```
- macOS/Linux:
```bash
source venv/bin/activate
```

4. **Install Python Dependencies**
```bash
pip install -r requirements.txt
```

5. **Configure Environment Variables**
Create a `.env` file in the root directory:
```env
GROQ_API_KEY=your_groq_api_key_here
DATABASE_URL=sqlite:///./hcp_crm.db
LLM_MODEL=mixtral-8x7b-32768
LLM_TEMPERATURE=0.7
```

6. **Initialize Database**
```bash
python -m app.database
```

### Frontend Setup

1. **Install Node Dependencies**
```bash
npm install
```

2. **Configure Frontend Environment**
Create a `.env.local` file in the root directory:
```env
VITE_API_URL=http://localhost:8000
```

## How to Run the Project Locally

### Start Backend Server

1. **Activate Virtual Environment** (if not already activated)
```bash
# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

2. **Run FastAPI Server**
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

The backend API will be available at: `http://localhost:8000`
API documentation (Swagger UI): `http://localhost:8000/docs`

### Start Frontend Development Server

1. **Open a New Terminal**

2. **Run Development Server**
```bash
npm run dev
```

The frontend application will be available at: `http://localhost:5173`

### Access the Application

1. Open your web browser
2. Navigate to `http://localhost:5173`
3. The application will connect to the backend API automatically
4. Start logging and managing HCP interactions with AI-powered assistance

### API Endpoints

Key API endpoints available:

- `GET /api/hcps` - Retrieve all healthcare professionals
- `POST /api/hcps` - Create new HCP record
- `GET /api/interactions` - Retrieve interaction history
- `POST /api/interactions` - Log new interaction
- `PUT /api/interactions/{id}` - Update interaction
- `POST /api/ai/analyze` - AI-powered interaction analysis
- `POST /api/ai/followup` - Generate follow-up recommendations

## Certification Use Case

### Infosys Certification Relevance

This project demonstrates proficiency in multiple key areas relevant to Infosys certification and modern enterprise software development:

#### Technical Competencies
1. **AI/ML Integration**: Practical implementation of Large Language Models in enterprise applications
2. **Full-Stack Development**: End-to-end development using Python, FastAPI, React, and modern web technologies
3. **API Design**: RESTful API architecture following industry best practices
4. **Database Management**: ORM-based data modeling and persistence
5. **Cloud-Ready Architecture**: Scalable, containerizable application design

#### Business Domain Knowledge
1. **Healthcare Industry**: Understanding of pharmaceutical sales and HCP engagement
2. **CRM Systems**: Implementation of customer relationship management principles
3. **Compliance**: Built-in regulatory compliance for healthcare industry
4. **Data Privacy**: HIPAA-compliant data handling practices

#### AI/NLP Capabilities Demonstrated
1. **Prompt Engineering**: Advanced techniques for LLM interaction
2. **Natural Language Processing**: Text analysis, sentiment detection, entity recognition
3. **Multi-Agent Systems**: LangGraph-based agent orchestration
4. **Context Management**: Maintaining conversational context across interactions

#### Industry Applications
- Pharmaceutical sales optimization
- Healthcare professional engagement
- Compliance automation
- Data-driven decision making
- Personalized communication at scale

This project serves as a comprehensive portfolio piece showcasing the ability to integrate cutting-edge AI technologies with traditional enterprise software development, making it highly relevant for technical certifications and professional development in AI-enabled business solutions.

## License

MIT License

Copyright (c) 2026 Sukanya Roy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

**Developed for AI-First Healthcare CRM Solutions**

For questions, issues, or contributions, please open an issue on the GitHub repository.
