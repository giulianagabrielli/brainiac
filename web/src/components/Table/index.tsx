import React, { Props, useState, useEffect } from "react";

import api from "../../services/api";

import "./styles.css";

import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
  HeaderFilter,
  FilterRow,
} from "devextreme-react/data-grid";

const pageSizes = [10, 25, 50, 100];

export default function Table() {
  const [leakages, setLeakages] = useState([]);

  useEffect(() => {
    api.get("leakages").then((response) => {
      setLeakages(response.data);
    });
  }, []);

  return (
    <div className="table">
      <DataGrid
        dataSource={leakages}
        allowColumnReordering={true}
        showBorders={true}
      >
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Column caption="Id" dataField="id" dataType="string" width="5%" />
        <Column
          caption="E-mail"
          dataField="email"
          dataType="string"
          width="32%"
        />
        <Column
          caption="Password"
          dataField="password"
          dataType="string"
          width="32%"
        />
        <Column
          caption="Created at"
          dataField="created_at"
          dataType="date"
          width="32%"
        />

        <Pager
          allowedPageSizes={pageSizes}
          showPageSizeSelector={true}
          showInfo={true}
        />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}
