# Reportarium: Skills and Technology Stack for CV Use

## Project summary

Reportarium is a full-stack financial reporting and analytics application for PJSC Ukrnafta. It imports complex Excel workbooks, validates and normalizes financial data, stores report versions in PostgreSQL, and presents interactive Ukrainian-language dashboards for cash flow, accounts receivable, promissory notes (veksels), and inventory.

## Technology stack

### Backend

- Python 3.12+
- Django 5.2 and Django REST Framework 3.16
- PostgreSQL with Psycopg 3
- Django ORM, migrations, transactions, bulk inserts, and JSON fields
- Session-based authentication, CSRF protection, and CORS configuration
- REST API design and serialization

### Data processing and Excel integration

- `openpyxl` for reading complex XLSX workbooks and cached formula values
- `pandas` for tabular data processing
- `XlsxWriter` for generating normalized Excel workbooks
- Versioned import parsers for multiple financial-report formats
- Header and schema detection based on workbook content rather than fixed positions
- Data normalization, validation summaries, quality flags, and source-data traceability
- JSON-driven mappings for financial categories and ledger semantics

### Frontend

- React 19
- TypeScript 5.7
- Vite 6
- Tailwind CSS 4 and custom responsive CSS
- Apache ECharts 5 with `echarts-for-react`
- Lucide React icons
- Browser Fetch API for typed backend communication
- Route-based single-page application architecture
- Responsive dashboards and print/PDF-oriented report views

### Development tooling

- `uv` for Python dependency and environment management
- npm for frontend dependency management and scripts
- Git for version control
- Django management commands for imports, exports, migrations, and operational workflows
- Django system checks and production frontend builds for manual verification

## Engineering skills demonstrated

- Full-stack development across Python/Django and React/TypeScript
- Financial data modeling and relational database design
- ETL pipeline design for inconsistent, evolving Excel formats
- Backward-compatible parser development and explicit parser versioning
- REST API and frontend/backend payload-contract design
- Interactive financial data visualization, KPI presentation, and drill-down workflows
- Report versioning, manual report chaining, and baseline comparison logic
- Transactional imports and efficient bulk database operations
- Data-quality validation, normalization, provenance, and auditability
- Privacy-aware UI design for sensitive banking and payment information
- Authentication and web security fundamentals
- Ukrainian-language localization and domain-specific UX
- Technical documentation for entities, parser mappings, and API contracts

## Financial and business-domain experience

- 13-week cash-flow forecasting and plan-versus-actual analysis
- Accounts receivable aggregation and contract-level drill-down
- Aging analysis and problematic-debt workflows
- Promissory-note lifecycle and repayment-schedule tracking
- Inventory snapshot analysis and data-quality monitoring
- Treasury reporting and executive financial dashboards
- Monetary-unit scaling across UAH, thousands of UAH, and millions of UAH

## CV-ready project description

**Reportarium — Financial Reporting and Analytics Platform**  
Developed a full-stack application that converts complex Excel-based financial reports into normalized, versioned data and interactive dashboards. Built with Python, Django REST Framework, PostgreSQL, React, TypeScript, and Apache ECharts.

## CV bullet options

Use only the bullets that match your personal contribution to the project.

- Built a full-stack financial analytics platform using Django REST Framework, PostgreSQL, React, and TypeScript.
- Designed versioned ETL pipelines that import, validate, normalize, and preserve traceability for evolving Excel financial-report formats.
- Modelled cash-flow, receivables, promissory-note, and inventory data with Django ORM, PostgreSQL relational structures, and JSON fields.
- Developed interactive ECharts dashboards with KPIs, drill-down analysis, report history, baseline comparisons, and configurable monetary units.
- Implemented transactional imports and batched database writes to support reliable processing of detailed workbook data.
- Created authenticated REST API workflows using Django sessions, CSRF protection, typed frontend payloads, and privacy-aware presentation of sensitive financial data.
- Built report configuration, chaining, comparison, executive export, and print/PDF views for operational and management reporting.
- Documented data entities, Excel parser mappings, validation behavior, and backend/frontend contracts to support maintainability and future report types.

## Compact skills line

Python, Django, Django REST Framework, PostgreSQL, SQL, React, TypeScript, Vite, Tailwind CSS, Apache ECharts, REST APIs, Excel/XLSX processing, openpyxl, pandas, XlsxWriter, ETL, financial data modelling, data visualization, Git, uv, npm.

## Notes for CV customization

- Add measurable results only when they can be verified, such as workbook row counts, number of supported report formats, import-time improvements, or reductions in manual reporting effort.
- Replace “Developed” with a more precise role description if the work was shared across a team.
- Keep the detailed stack for a technical CV; use the compact skills line and three or four bullets for a shorter CV.
