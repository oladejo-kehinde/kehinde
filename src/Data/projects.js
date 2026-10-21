// Placeholder detail text shared by the six demo projects.
// For a real project, add your own values after "...detailsPlaceholder" and they replace these.
import projectImg1 from '../assets/invoice.png'
import projectImg2 from '../assets/palm-groove.png'
import projectImg3 from '../assets/MR-B.png'
import projectImg4 from '../assets/verified-b2b.png'
import projectImg5 from '../assets/birthday.png'

const detailsPlaceholder = {
    overview: "A longer explanation of what this project is about goes here.",
    problem: "What was slow, manual or broken before.",
    solution: "What you built and how it works.",
    tools: ["Tool one", "Tool two"],
    video: null,         // paste an EMBED link here (see the notes after the steps)
    workflowImage: null, // import a screenshot from /assets and put it here
    liveLink: null,      // optional: a link to open the project
};

export const projects = [
    {
        id: 1, slug: "project-one", category: "Lead & Client Management", title: "Client Onboarding & Invoicing System", description: "Simplifies client onboarding by generating and emailing invoices automatically.", image: projectImg1, ...detailsPlaceholder, overview: "This project demonstrates how a technical agency, Nexus Systems & Automation Ltd., can simplify client onboarding and invoicing when selling service packages. In this scenario, Nexus provides technical services to Sarah Jenkins, who runs Apex Coaching & Consulting. Sarah purchases Lead Router & CRM Automation Setup for $450 and Domain & Email Deliverability Fix for $150, bringing the total invoice to $600. The system handles the process from collecting client details and service selections to generating a personalized invoice and delivering it to Sarah by email.",

        problem: "Creating invoices manually for every new client takes time, especially when a business offers multiple service packages. The agency has to collect client information, confirm the selected services and prices, prepare the invoice, and email it to the right person. Repeating these steps for every client can slow down onboarding, create billing errors, and delay invoice delivery.",

        solution: "I built a workflow that collects client information and selected service packages through an online form. The submitted information is passed to Make, where the workflow processes the details and determines the appropriate services and prices. Google Docs is used to generate a personalized invoice containing the client's information, selected services, individual prices, and total amount due. The document is then converted into a PDF and sent to the client's email through Gmail. For this example, Sarah Jenkins receives an invoice from Nexus Systems & Automation Ltd. for $600, covering both selected services. This reduces manual document preparation and makes the billing process faster and more consistent.",

        tools: ["Tally", "Make", "Google Docs", "PDF", "Gmail"],
    },
    {
        id: 2, slug: "project-two", category: "Lead & Client Management", title: "Property Inquiry & Lead Management System", description: "Manages high volumes of property inquiries, helping agents save time, respond faster, and track potential buyers and renters more easily.", image: projectImg2, ...detailsPlaceholder,

        overview: "Palm Grove Properties is a small real estate agency in Lagos with four agents handling approximately 120 property enquiries every month. These enquiries come from people interested in renting or buying properties, finding commercial spaces, or listing their properties for sale or rent. All enquiries are submitted through an online form. This project focuses on improving how the agency receives, organizes, and responds to these enquiries. Instead of relying on staff to manually process every submission, the system creates a more organized process where customer details are stored in one central database, customers receive an immediate confirmation email, and the relevant agent is notified when a new enquiry arrives. This helps the agency manage enquiries more efficiently and gives its agents more time to focus on customers and property transactions.",

        problem: "Palm Grove Properties handles its customer enquiries manually. Whenever someone submits an enquiry, a staff member must read the message, copy the customer's details into a spreadsheet, prepare a response, and notify an agent who can follow up. With approximately 120 enquiries arriving every month, these repetitive tasks consume valuable time and make it difficult to manage requests consistently. Enquiries can be overlooked, customer information can become scattered or disorganized, and agents may not receive important details promptly. Customers may also wait longer than necessary for a response, while follow-ups can be missed because there is no streamlined process for tracking and assigning incoming enquiries.",

        solution: "I designed a workflow that simplifies the process from the moment a customer submits an enquiry to the point when an agent is ready to follow up. First, customers complete an online form built with Tally, providing their contact information, property interests, and enquiry details. Make receives each submission and transfers the information into Airtable, where customer records are stored in an organized, centralized database. The workflow then sends the customer an automatic confirmation email to acknowledge receipt of their enquiry. At the same time, it notifies the relevant agent through email or Slack, including the customer's details and the information needed to follow up. This reduces the need for staff to copy information between tools, write individual confirmation messages, and manually alert agents. Agents can access organized enquiry records and focus on responding to prospective buyers, renters, and property owners.",

        tools: ["Tally", "Make", "Airtable", "Gmail", "Slack"]
    },
    {
        id: 3, slug: "project-three", category: "Lead & Client Management", title: "Client Inquiry & Follow-Up Management", description: "Streamlines customer inquiries and data organization, reducing manual work and helping ensure faster follow-ups.", image: projectImg3, ...detailsPlaceholder,

        overview: "Mr. B is a consultation service provider who receives customer enquiries from people interested in his services. Before this project, he spent approximately 3–4 hours every day reviewing submissions, copying customer information into spreadsheets, replying to enquiries manually, and deciding which leads needed attention first. This process took time away from serving clients and increased the risk of missing valuable business opportunities. I designed a lead management system that handles these repetitive tasks as soon as an enquiry arrives. The system records customer details, sends personalized email responses based on the customer's budget, and notifies Mr. B when a new lead comes in. It also generates a weekly summary of incoming leads, helping him understand enquiry activity and identify high-budget prospects that may need priority follow-up.",

        problem: "Mr. B's enquiry management process depended heavily on manual work. Every new submission required him to review the customer's name, email address, requested service, estimated budget, and project details before recording the information and responding. Managing these steps repeatedly consumed 3–4 hours daily and made it difficult to prioritize enquiries efficiently. High-budget prospects could wait too long for a response, customer records were harder to track, and follow-ups could be missed. He also lacked a convenient way to review how many enquiries arrived each week and how many represented higher-value opportunities.",

        solution: "I built a lead intake and routing system that begins when a customer submits an enquiry through a Tally form. Make receives the submission immediately through a webhook and processes the information, converting selected form answers into readable service names and budget amounts. The customer's details are then saved in Airtable, where each enquiry receives a 'New' status so it can be tracked as it progresses through the sales process. A routing process checks the customer's estimated budget and directs the enquiry down the appropriate path. Customers with lower budgets receive a standard confirmation email, while higher-budget prospects receive a priority-focused response. At the same time, Mr. B receives a Slack notification containing the relevant lead information, with urgent alerts for higher-value enquiries. In addition, a separate weekly workflow reviews the previous seven days of enquiries, counts the total leads and higher-budget prospects, and emails Mr. B a summary. This creates a more organized process for capturing, responding to, prioritizing, and reviewing potential clients.",

        tools: ["Tally", "Make", "Airtable", "Gmail", "Slack"]
    },
    {
        id: 4, slug: "project-four", category: "Data Management & Business Systems", title: "B2B Lead Research & Contact Verification", description: "Creates accurate, organized contact lists to help businesses reach the right decision makers and improve sales outreach.", image: projectImg4, ...detailsPlaceholder,
        overview: "This project is an end-to-end B2B lead generation and data validation workflow designed to source, clean, and verify contact details for 50 targeted companies across key markets. Built specifically to eliminate deliverability issues and satisfy strict compliance requirements, the workflow combines automated sourcing, structured data extraction, and rigorous bulk email verification to deliver an outreach-ready lead database with zero bounce potential.",

        problem: "Manual lead sourcing and unverified contact mining typically result in high bounce rates, wasted time, and damage to sender domain reputation. Prior to this, gathering company leads required tedious manual web scraping, while contact emails were often outdated, misformatted, or linked to non-existent mail servers—leading to high rates of failed deliveries and inefficient outreach efforts.",

        solution: "I established a streamlined, multi-step pipeline that extracts company profiles using targeted platform filters (industry, company size, and region), enriches each record with primary contact details, and runs a automated MX record verification using bulk verification software. The output is a structured, 100% deliverable lead list normalized into a standard Google Sheets format with complete fields across company name, URL, verified email, location, and industry.",

        tools: ["Apollo.io", "Hunter.io", "Bouncer", "Google Sheets"]
    },
    {
        id: 5, slug: "project-five", category: "Workflow Automation & Integration", title: "Community Birthday Reminder System", description: "Keeps track of members’ birthdays and sends reminders to help community managers celebrate members on time.", image: projectImg5, ...detailsPlaceholder,

        overview: "This project demonstrates how a community manager can keep track of members' birthdays without having to check a spreadsheet manually every day. When a community has many members, remembering everyone's birthday can become difficult, especially when the manager also has other responsibilities. I created a birthday reminder system that stores members' details and birthday dates in Google Sheets, checks for upcoming birthdays, and sends a summary email to the community manager. The email provides a convenient list of members whose birthdays are approaching, helping the manager prepare birthday messages or coordinate celebrations in advance. The goal is to make member recognition easier, more consistent, and less dependent on memory or manual checking.",

        problem: "Community managers often have to balance event planning, member engagement, announcements, and other daily responsibilities. Keeping track of every member's birthday alongside these tasks can be challenging. When birthdays are recorded in a spreadsheet, the manager may need to open the document regularly and check dates manually to know who should be celebrated next. This takes time and increases the chance of forgetting an important date. Missing birthdays can also mean missed opportunities to recognize members and make them feel valued within the community.",

        solution: "I built a birthday reminder workflow using Google Sheets and Make. Members' names, email addresses where needed, and birthday dates are stored in a spreadsheet that serves as the central record. Make checks the stored dates to identify members whose birthdays fall on the following day. When upcoming birthdays are found, the workflow gathers the relevant member details into a single summary email and sends it to the community manager through Gmail. Instead of receiving separate emails for every member, the manager gets one organized reminder listing the upcoming birthdays. This makes it easier to prepare birthday messages, update community birthday graphics, and plan timely recognition without repeatedly checking the spreadsheet manually.",

        tools: ["Google Sheets", "Make", "Gmail"]

     }// { id: 6, slug: "project-six", category: "CATEGORY", title: "Project title", description: "Short description goes here.", image: null, ...detailsPlaceholder },
];