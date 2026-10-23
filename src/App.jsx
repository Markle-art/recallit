import { useEffect, useState } from 'react'
import './App.css'

const topics = [
  { id: 'cloud', title: 'Cloud concepts', icon: '', color: 'blue', description: 'Explore cloud computing, benefits, and service models.' },
  { id: 'azure', title: 'Azure architecture and services', icon: '', color: 'purple', description: 'Learn about regions, resources, and core Azure services.' },
  { id: 'management', title: 'Azure management and governance', icon: '', color: 'green', description: 'Understand governance, compliance, and cost management.' },
]

const questions = [

  { topic: 'cloud', question: 'Which cloud model combines on-premises infrastructure with public cloud services?', options: ['Private cloud', 'Hybrid cloud', 'Community cloud', 'SaaS'], answer: 1, explanation: 'Hybrid cloud combines private infrastructure with public cloud services.' },
  { topic: 'cloud', question: 'Which benefit describes adjusting resources to meet changing demand?', options: ['Governance', 'High availability', 'Scalability', 'Capital expenditure'], answer: 2, explanation: 'Scalability means increasing or decreasing resources to meet demand.' },
  { topic: 'azure', question: 'What is an Azure region?', options: ['A billing invoice', 'A geographic area containing one or more datacenters', 'A user account', 'A security role'], answer: 1, explanation: 'An Azure region is a geographic area containing one or more datacenters.' },
  { topic: 'azure', question: 'Which service provides on-demand virtual machines?', options: ['Azure Virtual Machines', 'Microsoft Entra ID', 'Azure Policy', 'Azure Advisor'], answer: 0, explanation: 'Azure Virtual Machines provides scalable computing resources.' },
  { topic: 'management', question: 'Which service helps enforce organizational standards across Azure resources?', options: ['Azure DNS', 'Azure Policy', 'Azure Virtual Network', 'Azure Files'], answer: 1, explanation: 'Azure Policy helps enforce organizational standards and assess compliance.' },
  { topic: 'management', question: 'Which service recommends improvements to Azure deployments?', options: ['Azure Advisor', 'Azure Blob Storage', 'Azure DNS', 'Azure Bastion'], answer: 0, explanation: 'Azure Advisor recommends improvements for reliability, security, performance, and cost.' },
  { topic: 'cloud', question: 'Under consumption-based pricing, how are cloud services generally charged?', options: ['A fixed lifetime fee for all services', 'According to the resources or services consumed', 'Only when a new account is created', 'The same amount regardless of usage'], answer: 1, explanation: 'Consumption-based pricing generally charges you for the resources or services you use.' },
  { topic: 'cloud', question: 'Which cloud service model lets customers deploy applications while the provider manages the underlying platform?', options: ['IaaS', 'PaaS', 'On-premises hosting', 'Local desktop software'], answer: 1, explanation: 'Platform as a Service (PaaS) provides a managed platform for developing and running applications.' },
  { topic: 'azure', question: 'What is the main purpose of Azure availability zones?', options: ['To organize billing invoices', 'To provide physically separate locations within a region for improved resiliency', 'To replace Azure subscriptions', 'To assign permissions to users'], answer: 1, explanation: 'Availability zones use physically separate locations within a supported Azure region to improve resiliency.' },
  { topic: 'azure', question: 'What is an Azure resource group?', options: ['A container for managing related Azure resources', 'A physical datacenter', 'A type of user password', 'A tool used only for billing invoices'], answer: 0, explanation: 'A resource group is a logical container for Azure resources that you manage together.' },
  { topic: 'management', question: 'Which Azure resource lock helps prevent accidental deletion while still allowing normal updates?', options: ['ReadOnly lock', 'CanNotDelete lock', 'Billing lock', 'SignIn lock'], answer: 1, explanation: 'A CanNotDelete lock allows authorized users to read and modify a resource but prevents deletion until the lock is removed.' },
  { topic: 'management', question: 'Which Azure capability helps review spending, create budgets, and set cost alerts?', options: ['Azure DNS', 'Microsoft Cost Management', 'Azure Virtual Network', 'Microsoft Entra ID'], answer: 1, explanation: 'Microsoft Cost Management helps analyze spending and use budgets and alerts to monitor costs.' },
  { topic: 'cloud', question: 'Which cloud capability automatically adjusts resources as demand changes?', options: ['Elasticity', 'Governance', 'Compliance', 'Data residency'], answer: 0, explanation: 'Elasticity allows resources to expand or contract in response to changing demand.' },
  { topic: 'cloud', question: 'A company uses a complete email application managed by its provider. Which service model is this?', options: ['IaaS', 'PaaS', 'SaaS', 'On-premises'], answer: 2, explanation: 'Software as a Service provides a ready-to-use application managed by the provider.' },
  { topic: 'cloud', question: 'Which cloud benefit helps keep an application accessible despite infrastructure failures?', options: ['High availability', 'Capital expenditure', 'Manual provisioning', 'Data classification'], answer: 0, explanation: 'High availability uses resilient design to reduce service interruptions.' },
  { topic: 'cloud', question: 'Which responsibility generally remains with a cloud customer?', options: ['Maintaining physical servers', 'Protecting their data and managing access', 'Replacing datacenter disks', 'Maintaining provider buildings'], answer: 1, explanation: 'Customers remain responsible for protecting their data and managing access, although responsibilities vary by service model.' },

  { topic: 'azure', question: 'What is the main purpose of an Azure management group?', options: ['Group user passwords', 'Organize subscriptions for governance', 'Store Blob Storage files', 'Replace resource groups'], answer: 1, explanation: 'Management groups organize subscriptions in a hierarchy so governance policies can be applied across them.' },
  { topic: 'azure', question: 'Which compute option packages an application and its dependencies for consistent deployment?', options: ['Azure DNS', 'Azure Storage account', 'Container', 'Resource lock'], answer: 2, explanation: 'Containers package applications and dependencies into portable units.' },
  { topic: 'azure', question: 'Which Azure service runs event-driven code without requiring you to manage servers?', options: ['Azure Functions', 'Azure Files', 'Azure Policy', 'Azure ExpressRoute'], answer: 0, explanation: 'Azure Functions supports event-driven code execution without requiring you to manage the underlying servers.' },
  { topic: 'azure', question: 'What is the purpose of a subnet in an Azure virtual network?', options: ['Calculate monthly bills', 'Divide a network address space into smaller ranges', 'Manage exam results', 'Replace authentication'], answer: 1, explanation: 'Subnets divide a virtual network address space into smaller logical network segments.' },
  { topic: 'azure', question: 'Which service provides a private, dedicated connection from an organization to Microsoft cloud services?', options: ['Azure Advisor', 'Azure Functions', 'Azure ExpressRoute', 'Azure Queue Storage'], answer: 2, explanation: 'ExpressRoute provides private connectivity between an organization and Microsoft cloud services.' },
  { topic: 'azure', question: 'Which Azure Storage service is designed for unstructured data such as images and documents?', options: ['Azure Blob Storage', 'Azure DNS', 'Microsoft Entra ID', 'Azure Policy'], answer: 0, explanation: 'Blob Storage is designed for unstructured object data, including images, documents, and backups.' },
  { topic: 'azure', question: 'Which Azure storage service provides managed file shares?', options: ['Azure Queue Storage', 'Azure Files', 'Azure Advisor', 'Azure Resource Manager'], answer: 1, explanation: 'Azure Files provides managed file shares accessible through supported file-sharing protocols.' },
  { topic: 'azure', question: 'Which authentication method requires two or more forms of verification?', options: ['Single sign-on only', 'Resource tagging', 'Multifactor authentication', 'A resource lock'], answer: 2, explanation: 'Multifactor authentication requires multiple forms of verification to help protect an account.' },

  { topic: 'management', question: 'Which tool estimates Azure service costs before deployment?', options: ['Azure Service Health', 'Azure Pricing Calculator', 'Microsoft Entra ID', 'Azure Cloud Shell'], answer: 1, explanation: 'The Pricing Calculator estimates costs based on the services and configurations you plan to use.' },
  { topic: 'management', question: 'What is a common use for tags on Azure resources?', options: ['Physically move resources', 'Replace access controls', 'Categorize resources for reporting and cost allocation', 'Guarantee zero downtime'], answer: 2, explanation: 'Tags are metadata labels that help organize resources and support reporting and cost allocation.' },
  { topic: 'management', question: 'Which browser-accessible environment supports Azure CLI and Azure PowerShell?', options: ['Azure Cloud Shell', 'Azure Advisor', 'Azure Service Health', 'Microsoft Purview'], answer: 0, explanation: 'Azure Cloud Shell provides a browser-accessible shell for working with Azure CLI or Azure PowerShell.' },
  { topic: 'management', question: 'Which Azure service reports outages and planned maintenance affecting Azure services?', options: ['Azure Files', 'Azure Service Health', 'Azure Functions', 'Azure DNS'], answer: 1, explanation: 'Azure Service Health provides information about incidents and planned maintenance affecting your resources.' },
  { topic: 'management', question: 'Which monitoring capability lets you query and analyze collected log data?', options: ['Azure Pricing Calculator', 'Resource tags', 'Log Analytics', 'Azure Policy'], answer: 2, explanation: 'Log Analytics helps query and analyze log data to investigate issues and understand resource behavior.' },
  { topic: 'management', question: 'What is the purpose of an Azure Resource Manager template?', options: ['Define infrastructure for repeatable deployments', 'Approve exam answers', 'Replace multifactor authentication', 'Monitor only physical laptops'], answer: 0, explanation: 'ARM templates describe Azure resources declaratively, supporting repeatable infrastructure-as-code deployments.' },
]

const cards = [
  { front: 'What is cloud computing?', back: 'The delivery of computing services over the internet, often with on-demand access and usage-based pricing.', topic: 'cloud' },
  { front: 'What is the shared responsibility model?', back: 'A model that divides security and operational responsibilities between the cloud provider and customer.', topic: 'cloud' },
  { front: 'What is an Azure availability zone?', back: 'A physically separate location within an Azure region, with independent infrastructure.', topic: 'azure' },
  { front: 'What is Microsoft Entra ID?', back: 'Microsofts cloud-based identity and access management service.', topic: 'management' },
]

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem('recallit-progress')) || { answered: [], mastered: [] }
  } catch {
    return { answered: [], mastered: [] }
  }
}

function App() {
  const [page, setPage] = useState('overview')
  const [progress, setProgress] = useState(loadProgress)
  const [cardIndex, setCardIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [quizIndex, setQuizIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    localStorage.setItem('recallit-progress', JSON.stringify(progress))
  }, [progress])

  const accuracy = progress.answered.length
    ? Math.round(progress.answered.filter(item => item.correct).length / progress.answered.length * 100)
    : 0

  const question = questions[quizIndex]

  function startQuiz() {
    setQuizIndex(0)
    setSelected(null)
    setRevealed(false)
    setScore(0)
    setFinished(false)
    setPage('quiz')
  }

  function submitAnswer() {
    if (selected === null || revealed) return
    const question = questions[quizIndex]
    const correct = selected === question.answer
    setRevealed(true)
    if (correct) setScore(value => value + 1)
    setProgress(old => ({
      ...old,
      answered: [
        ...old.answered.filter(item => item.question !== question.question),
        { question: question.question, topic: question.topic, correct },
      ],
    }))
  }

  function nextQuestion() {
    if (quizIndex === questions.length - 1) {
      setFinished(true)
      return
    }
    setQuizIndex(value => value + 1)
    setSelected(null)
    setRevealed(false)
  }

  function markMastered() {
    const front = cards[cardIndex].front
    setProgress(old => ({
      ...old,
      mastered: old.mastered.includes(front) ? old.mastered : [...old.mastered, front],
    }))
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview" onClick={event => { event.preventDefault(); setPage('overview') }}>
          <span className="brand-mark">R</span><span>recallit<span className="brand-dot">.</span></span>
        </a>
        <p className="side-label">YOUR STUDY SPACE</p>
        <button className={`nav-item ${page === 'overview' ? 'active' : ''}`} onClick={() => setPage('overview')}> <span>Overview</span></button>
        <button className={`nav-item ${page === 'flashcards' ? 'active' : ''}`} onClick={() => setPage('flashcards')}> <span>Flashcards</span></button>
        <button className={`nav-item ${page === 'quiz' ? 'active' : ''}`} onClick={startQuiz}> <span>Practice quiz</span></button>
        <button className={`nav-item ${page === 'topics' ? 'active' : ''}`} onClick={() => setPage('topics')}> <span>Learning topics</span></button>
        <div className="sidebar-bottom"><span className="mini-avatar">AZ</span><div><strong>AZ-900 journey</strong><small>Fundamentals track</small></div></div>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <div className="breadcrumb">My learning <span>/</span> <strong>{page === 'overview' ? 'Overview' : page === 'quiz' ? 'Practice quiz' : page === 'flashcards' ? 'Flashcards' : 'Learning topics'}</strong></div>
          <span className="exam-chip"><span /> AZ-900 PREP</span>
        </header>

        {page === 'overview' && <section className="page-content">
          <div className="welcome-row"><div><p className="eyebrow">YOUR NEXT CLOUD MILESTONE</p><h1>Small steps. <span>Big progress.</span></h1><p className="subtitle">Build your Azure fundamentals, one focused session at a time.</p></div></div>
          <div className="hero-card"><div className="hero-copy"><span className="hero-tag">YOUR LEARNING PATH</span><h2>Ready to get cloud confident?</h2><p>Practice original questions, revisit what you forget, and build your exam readiness.</p><button className="primary-button" onClick={startQuiz}>Start a practice quiz <span></span></button></div><div className="hero-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="planet"></div><span className="float-card float-top"> Learn</span><span className="float-card float-bottom"> Review</span></div></div>
          <div className="stats-grid">
            <div className="stat-card"><span className="stat-icon lilac"></span><div><p>Questions answered</p><h3>{progress.answered.length}<small> / {questions.length}</small></h3></div></div>
            <div className="stat-card"><span className="stat-icon mint"></span><div><p>Quiz accuracy</p><h3>{accuracy}%</h3></div></div>
            <div className="stat-card"><span className="stat-icon peach"></span><div><p>Cards mastered</p><h3>{progress.mastered.length}<small> / {cards.length}</small></h3></div></div>
          </div>
          <div className="section-heading"><div><p className="eyebrow">THE AZ-900 BLUEPRINT</p><h2>Your learning topics</h2></div><button className="text-button" onClick={() => setPage('topics')}>View all topics </button></div>
          <div className="topic-grid">{topics.map((topic, index) => <article className="topic-card" key={topic.id}><div className={`topic-icon ${topic.color}`}>{topic.icon}</div><span className="topic-number">0{index + 1}</span><h3>{topic.title}</h3><p>{topic.description}</p><div className="progress-track"><span style={{ width: `${Math.min(100, progress.answered.filter(item => item.topic === topic.id).length / 2 * 100)}%` }} /></div><div className="topic-footer"><span>{progress.answered.filter(item => item.topic === topic.id).length} of 2 questions practiced</span><button onClick={() => { setQuizIndex(questions.findIndex(q => q.topic === topic.id)); setSelected(null); setRevealed(false); setFinished(false); setScore(0); setPage('quiz') }}>Study topic </button></div></article>)}</div>
          <p className="disclaimer">Unofficial study companion. Not affiliated with or endorsed by Microsoft. Practice questions are original learning material, not real exam questions.</p>
        </section>}

        {page === 'topics' && <section className="page-content"><p className="eyebrow">STUDY BY OBJECTIVE</p><h1>Learning topics</h1><p className="subtitle">Explore the three broad AZ-900 skills areas.</p><div className="topic-grid topic-page-grid">{topics.map(topic => <article className="topic-card" key={topic.id}><div className={`topic-icon ${topic.color}`}>{topic.icon}</div><h3>{topic.title}</h3><p>{topic.description}</p><button className="primary-button" onClick={() => { setQuizIndex(questions.findIndex(q => q.topic === topic.id)); setSelected(null); setRevealed(false); setFinished(false); setScore(0); setPage('quiz') }}>Practice this topic </button></article>)}</div></section>}

        {page === 'flashcards' && <section className="page-content learning-page"><p className="eyebrow">ACTIVE RECALL</p><h1>Make it <span>stick.</span></h1><p className="subtitle">Try to recall the answer before flipping the card.</p><div className="flashcard-count">CARD {cardIndex + 1} OF {cards.length}</div><button className={`flashcard ${flipped ? 'is-flipped' : ''}`} onClick={() => setFlipped(value => !value)}><span className="card-hint">{flipped ? 'ANSWER' : 'THINK ABOUT IT'}</span><strong>{flipped ? cards[cardIndex].back : cards[cardIndex].front}</strong><span className="flip-hint">{flipped ? 'Click to see question' : 'Click to reveal answer '}</span></button><div className="flashcard-actions"><button className="secondary-button" onClick={() => { setCardIndex(value => (value - 1 + cards.length) % cards.length); setFlipped(false) }}> Previous</button><button className="primary-button" onClick={markMastered}> I know this</button><button className="secondary-button" onClick={() => { setCardIndex(value => (value + 1) % cards.length); setFlipped(false) }}>Next </button></div><p className="card-progress">{progress.mastered.length} of {cards.length} cards marked as mastered</p></section>}

        {page === 'quiz' && <section className="page-content learning-page"><p className="eyebrow">KNOWLEDGE CHECK</p><h1>Practice with <span>purpose.</span></h1>{finished ? <div className="result-card"><div className="result-icon"></div><p className="eyebrow">SESSION COMPLETE</p><h2>You scored {score} out of {questions.length}</h2><p>Keep reviewing your weaker areas and try again to reinforce your understanding.</p><button className="primary-button" onClick={startQuiz}>Try again </button><button className="text-button" onClick={() => setPage('overview')}>Back to overview</button></div> : <div className="quiz-card"><div className="quiz-topline"><span>QUESTION {quizIndex + 1} OF {questions.length}</span><span>{topics.find(topic => topic.id === question.topic)?.title}</span></div><div className="progress-track quiz-progress"><span style={{ width: `${(quizIndex + 1) / questions.length * 100}%` }} /></div><h2>{question.question}</h2><div className="answer-list">{question.options.map((option, index) => <button key={option} disabled={revealed} className={`answer-option ${selected === index ? 'selected' : ''} ${revealed && index === question.answer ? 'correct' : ''} ${revealed && selected === index && index !== question.answer ? 'incorrect' : ''}`} onClick={() => setSelected(index)}><span className="option-letter">{String.fromCharCode(65 + index)}</span>{option}<span className="option-mark">{revealed && index === question.answer ? '' : selected === index ? '' : ''}</span></button>)}</div>{revealed && <div className={`explanation ${selected === question.answer ? 'explanation-correct' : 'explanation-wrong'}`}><strong>{selected === question.answer ? 'Correct!' : 'Not quite.'}</strong><p>{question.explanation}</p></div>}<div className="quiz-actions">{!revealed ? <button className="primary-button" disabled={selected === null} onClick={submitAnswer}>Check answer </button> : <button className="primary-button" onClick={nextQuestion}>{quizIndex === questions.length - 1 ? 'See results ' : 'Next question '}</button>}</div></div>}<p className="disclaimer">Original practice questions for learning only. These are not official Microsoft exam questions.</p></section>}
      </main>
    </div>
  )
}

export default App
