import React from 'react';
import JobList from '@components/Jobs/JobList'
import { mount } from 'enzyme';
import { Row, Button } from 'antd';

interface Jobs {
  title: string;
  link: string;
}

describe('<JobList />', () => {
  let component = typeof JobList
  const jobCount = 5
  let config: Jobs[] = []
  for(let i=0; i<jobCount; i++){
    config.push({
      title: `Position${i}`
      link: `https://www.marketprotocol.io/assets/${i}.pdf`
    })
  }
  beforeEach(() => {

    component = mount(
      <JobList list={config} />
    )
  })

  it('renders without crashing', () => {
    expect(component.exists());
  });

  it('shows correct num of jobs', () => {
    expect(component.find(Row).length).toEqual(jobCount);
  });
})