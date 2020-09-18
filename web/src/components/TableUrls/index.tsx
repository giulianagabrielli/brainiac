import React, { Props, useState, useEffect } from 'react';
import { urls } from './data.js';

import ODataStore from 'devextreme/data/odata/store';
import api from '../../services/api';


import './styles.css';

import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  HeaderFilter,
  FilterRow
} from 'devextreme-react/data-grid';

// import DiscountCell from './DiscountCell.js';

const pageSizes = [10, 25, 50, 100];

// const dataSourceOptions = {
//   store: new ODataStore({
//     url: 'https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes',
//     beforeSend: function(request) {
//       request.params.startDate = '2018-05-10';
//       request.params.endDate = '2018-05-15';
//     }
//   })
// };

// const [leakages, setLeakages] = useState([]);

//   useEffect(() => {
//     api.get("leakages").then((response) => {
//       const { id, url, email, password } = response.data;

//       setLeakages({ id, url, email, password});
//     });
//   }, []);



class Table extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: false
    };
    this.onContentReady = this.onContentReady.bind(this);
  }
  render() {
    return (
        <div className="table">
            <DataGrid
                dataSource={urls}
                allowColumnReordering={true}
                showBorders={true}
                onContentReady={this.onContentReady}
            >
                <SearchPanel visible={true} highlightCaseSensitive={true} />
                <FilterRow visible={true} />
                <HeaderFilter visible={true} />
                <Column caption="Id" dataField="id" dataType="string" width="10%" />
                <Column caption="Url" dataField="url" dataType="string" width="45%" />
                <Column caption="Created at" dataField="created_at" dataType="date" width="45%" />

                <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} showInfo={true}/>
                <Paging defaultPageSize={10} />
                
            </DataGrid>
        </div>
    );
  }

  onContentReady(e: any) {
    if (!this.state.collapsed) {
      e.component.expandRow(['EnviroCare']);
      this.setState({
        collapsed: true
      });
    }
  }
}

export default Table;
