# CST-391: FaithTrack Milestone - Benchmark

**Author:** Matt Kollar  
**Class Number & Title:** CST-391: Database & Web Application Development  
**Date:** March 13, 2025

## **1. Introduction**  
FaithTrack is a web application designed to help users manage a collection of faith-based resources, such as Bible verses, devotionals, prayers, and Christian books. The application provides CRUD (Create, Read, Update, Delete) functionality along with additional features like search and categorization. This project is built with an Express.js backend, a MySQL database, and two front-end frameworks: Angular and React.

## **2. Design Updates**  
This section includes the design updates for the FaithTrack API project. The updated wireframes, ER diagram, and other designs are shown in the images below. These designs reflect changes made to the project during development.

**ER Diagram (Updated):**  
![Updated ER Diagram](docs/ER_Diagram_%20Updated.drawio.png)  
*Changes:* The ER diagram now correctly depicts the relationships between resources, categories, and the newly added user favorites table. Foreign key constraints and data structure have been modified to reflect proper relational mappings.

**UI Sitemap (Updated):**  
![Updated UI Sitemap](docs/Sitemap_Updated.drawio.png)  
*Changes:* The UI sitemap visualizes the correct flow for managing resources, including viewing, creating, editing, deleting, and filtering resources. The flow now incorporates the new resource categorization and search/filter functionality.

**Homepage Wireframe (Updated):**  
![Updated Homepage UI Wireframe](docs/Homepage_UI_Wireframe_Updated.drawio.png)  
*Changes:* The homepage layout has been updated to include a search bar and category filter. This allows users to more easily search for and filter resources based on their specific needs.

**Add/Edit Resource Wireframe (Updated):**  
![Updated Add/Edit Resource Wireframe](docs/Add_Edit_Resource_Wireframe_Updated.drawio.png)  
*Changes:* The form for adding and editing resources now includes fields for title, description, category, and scripture. These changes ensure that all required data is captured for each resource.

**Resource Details Wireframe (Updated):**  
![Updated Resource Details Page Wireframe](docs/Resource_Details_Page_Wireframe_Updated.drawio.png)  
*Changes:* The resource detail page now shows all relevant information for each resource, including its title, category, scripture, and other details, making it easier for users to interact with resources.

**User Favorites (Newly Added):**  
![Updated UML Diagram](docs/User_Favorites_New.drawio.png)  
*Changes:* The UML diagram now includes a UserFavorites feature. This allows users to mark resources as their favorites and stores the relationship between the user and their selected resources.

**UML Class Diagram (Updated):**  
![Updated UML Diagram](docs/UML_Updated.drawio.png)  
*Changes:* The UML diagram has been updated to reflect changes to the ResourceController, ResourceService, and ResourceRepository, which now support the functionality for managing resources and user favorites.

## **3. Updates Summary**  
Below is a table summarizing the updates made throughout the development process:

| Update Type       | Description                                                   | Status            |
|-------------------|---------------------------------------------------------------|-------------------|
| ER Diagram        | Updated relationships and added user favorites table          | Completed         |
| UI Sitemap        | Refined resource management flow, including search/filter     | Completed         |
| Homepage Wireframe| Updated to include search and filter functionality           | Completed         |
| Add/Edit Resource Wireframe | Improved form fields to capture resource details | Completed         |
| Resource Details Wireframe | Added resource detail view with necessary fields | Completed         |
| User Favorites    | New functionality added to allow users to mark resources as favorites | Completed         |
| UML Diagram       | Updated to include resource management and user favorites relationships | Completed         |

**Known Issues:**  
- No known issues at this time.

## **4. Functionality Requirements (API Endpoints)**  
Below is a table documenting the essential API endpoints implemented in the project:

| HTTP Method | Endpoint                         | Description                                      | Request Body Example (for POST and PUT)                                                                 |
|-------------|-----------------------------------|--------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| GET         | /api/resources                    | Fetch all resources                              | N/A                                                                                                    |
| POST        | /api/resources                    | Create a new resource                            | `{ "title": "New Faith-Based Resource", "description": "A detailed guide on spiritual growth", "category_id": 1, "scripture": "John 3:16" }` |
| PUT         | /api/resources/:id                | Update an existing resource                      | `{ "title": "Updated Faith Resource", "description": "Updated description", "category_id": 1, "scripture": "Psalm 23:1" }`   |
| DELETE      | /api/resources/:id                | Delete a resource by ID                          | N/A                                                                                                    |

### Example Usage:
- **GET Request**:  
    `GET http://localhost:5000/api/resources`  
    *Returns all resources available in the database.*

- **POST Request**:  
    `POST http://localhost:5000/api/resources`  
    *Request Body:*  
    ```json
    {
      "title": "New Faith-Based Resource",
      "description": "A detailed guide on spiritual growth",
      "category_id": 1,
      "scripture": "John 3:16"
    }
    ```  
    *Creates a new resource in the database.*

- **PUT Request**:  
    `PUT http://localhost:5000/api/resources/1`  
    *Request Body:*  
    ```json
    {
      "title": "Updated Faith Resource",
      "description": "Updated description",
      "category_id": 1,
      "scripture": "Psalm 23:1"
    }
    ```  
    *Updates the resource with ID 1.*

- **DELETE Request**:  
    `DELETE http://localhost:5000/api/resources/1`  
    *Deletes the resource with ID 1.*

## **5. Screencast Documentation**  
The following section provides the screencast demonstrating the functionality of the FaithTrack API:

**Screencast Link**: [http://somup.com/cTeIDc7g00](#)  
In this screencast, you can see:
1. The GET, POST, PUT, and DELETE API requests being tested in Postman.
2. The results of the operations as they affect the MySQL database.
3. How the data is manipulated and displayed through the endpoints.

## **6. Risks**  
Here are some risks that could potentially affect the project's future development:
- **Framework Complexity:** Handling two front-end frameworks (React and Angular) might lead to challenges in integrating with the backend.
- **Database Design Adjustments:** During the development, the schema might need to be modified as new features are introduced.
- **Deployment Issues:** Ensuring smooth deployment and integration between the backend, frontend, and MySQL database might present some challenges.

---