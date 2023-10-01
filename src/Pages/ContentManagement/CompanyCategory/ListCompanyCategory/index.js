import React, { useState ,useEffect} from "react";
import * as XLSX from "xlsx";
import "./styles.css";
import { useTable, usePagination } from "react-table";
import {companyData} from "../../../../Components/services/adminApi"
// Sample data
// const data = [
//   {
//     id: 1,
//     CategoryName: "Abhishek",
//     Currency: "INR",
//     SeminarFee: 45,
//     IsPublished: "true",
//   },
//   {
//     id: 2,
//     CategoryName: "iphone",
//     Currency: "INR",
//     SeminarFee: 25,
//     IsPublished: "false",
//   },
//   {
//     id: 3,
//     CategoryName: "testing",
//     Currency: "INR",
//     SeminarFee: 345,
//     IsPublished: "false",
//   },
//   {
//     id: 4,
//     CategoryName: "Board of Directors",
//     Currency: "US Dollar",
//     SeminarFee: 3500,
//     IsPublished: "false",
//   },
//   {
//     id: 5,
//     CategoryName: "Speaker",
//     Currency: "INR",
//     SeminarFee: 45,
//     IsPublished: "true",
//   },
//   {
//     id: 6,
//     CategoryName: "Honorary",
//     Currency: "INR",
//     SeminarFee: 25,
//     IsPublished: "false",
//   },
//   {
//     id: 7,
//     CategoryName: "Exhibitor",
//     Currency: "INR",
//     SeminarFee: 345,
//     IsPublished: "false",
//   },
//   {
//     id: 8,
//     CategoryName: "Board of Directors",
//     Currency: "US Dollar",
//     SeminarFee: 3500,
//     IsPublished: "true",
//   },
//   // Add more data here
// ];
const data=[]
//columns
const columns = [
  { Header: "ID", accessor: "_id" },
  { Header: "Category Name", accessor: "categoryName" },
  { Header: "Currency", accessor: "currency" },
  { Header: "Seminar Fee", accessor: "seminarFee" },
  { Header: "Is Published", accessor: "isPublished" },
  {
    Header: "Action",
    accessor: "actions",
    Cell: ({ row }) => (
      <button
        onClick={() => handleAction(row.original.id)}
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        View
      </button>
    ),
  },
];

const handleAction = (id) => {
  console.log(`Clicked action for ID ${id}`);
};
const ListCompanyCategory = () => {
  
  const [isExpanded, setIsExpanded] = useState(true);
  const [ompData,setOmpData]=useState();
  const [compData,setCompData]=useState();

  const fetchDataFromApi = async () => {
    try {
      const result = await companyData('api/v1/company-categories');
      setCompData(result.data)
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
 useEffect(() => { 
      fetchDataFromApi();
    },[]);

    
    
  const exportToExcel = () => {
    const wsData = ompData.map((item) => ({
      ID: item.id,
      "Category Name": item.categoryName,
      Currency: item.currency,
      "Seminar Fee": item.seminarFee,
      "Is Published": item.isPublished,
    }));

    const ws = XLSX.utils.json_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Delegate Categories");

    // Generate the Excel file as an ArrayBuffer
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    // Convert the ArrayBuffer to a Blob
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create a temporary URL to the blob
    const url = window.URL.createObjectURL(blob);

    // Create a link to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "delegate_categories.xlsx";
    a.click();

    // Release the temporary URL and clean up
    window.URL.revokeObjectURL(url);
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    console.log(compData)
  };
  const tableData = compData ? compData : data;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state: { pageIndex, pageSize },
    gotoPage,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    setPageSize,
  } = useTable(
    {
      columns,
      data:tableData ,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  return (
    <div className={`yourComponent ${isExpanded ? "expanded" : ""}`}>
      <div className="horizontalLine"></div>
      <div className="header">
        <div className="title">Delegate Categories</div>
        <button className="expandButton" onClick={toggleExpand}>
          {isExpanded ? "-" : "+"}
        </button>
      </div>
      {
      isExpanded && (
        <div className="container mx-auto mt-5">
            <div
              className="form-row"
              style={{
                backgroundColor: "rgb(229 231 235)",
                padding: "5px",
                height: " 36px",
                
              }}
            >
              <button className="btn" onClick={exportToExcel} style={{backgroundColor: "#fff",
    borderRadius: "8px"}}>
                Export To Excel
              </button>
            </div>
          <div className="overflow-x-auto">
             <table {...getTableProps()} className="table-auto w-full">
              <thead>
                {
                headerGroups.map((headerGroup) => (
                  
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="bg-gray-200"
                    style={{ fontSize: "14px" }}
                  >
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()} className="py-2 px-4">
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                { 
                page.map((row) => {
                  
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        
                        return (
                          <td
                            {...cell.getCellProps()}
                            className="border px-4 py-2"
                            style={{ fontSize: "12px" }}
                          >
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table> 
          </div>
          <div className="mt-4 flex flex-wrap justify-between">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="responsive-button"
            >
              {"<<"}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="responsive-button"
            >
              {"<"}
            </button>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="responsive-button"
            >
              {">"}
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="responsive-button"
            >
              {">>"}
            </button>
            <span className="mt-1">
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
              className="p-2 border rounded responsive-select"
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};
export default  ListCompanyCategory;