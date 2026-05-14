export function mountPropsTable(container, rows) {
  const wrap = document.createElement('div')
  wrap.className = 'arc-table-wrapper arc-table-cyan'
  wrap.innerHTML = `
    <table class="arc-table arc-table-compact">
      <caption class="playground-props-caption">
        Stato attuale (sola lettura)
      </caption>
      <thead>
        <tr>
          <th class="arc-table-th">Proprietà</th>
          <th class="arc-table-th arc-table-th-num">Valore</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  `
  const tbody = wrap.querySelector('tbody')
  for (const row of rows) {
    const tr = document.createElement('tr')
    tr.className = 'arc-table-row'
    const td1 = document.createElement('td')
    td1.className = 'arc-table-td'
    td1.textContent = row.name
    const td2 = document.createElement('td')
    td2.className = 'arc-table-td arc-table-td-num'
    if (row.value instanceof Node) {
      td2.appendChild(row.value)
    }
    else {
      td2.textContent = String(row.value)
    }
    tr.appendChild(td1)
    tr.appendChild(td2)
    tbody.appendChild(tr)
  }
  container.appendChild(wrap)
}
