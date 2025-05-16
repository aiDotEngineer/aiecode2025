import React from 'react';

import { Button } from '../Button';
import { Container } from '../Container';

export type SessionTabItem = {
  content: React.ReactNode;
  description: string;
  icon?: React.ReactNode;
  label: string;
};

export function SessionTabs({ tabs }: { tabs: Array<SessionTabItem> }) {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div className="flex flex-col gap-8">
      {/**
       * It just doesn't look right when there's only 1 tab, so don't render the triggers
       * unless we have more than 1 tab.
       */}
      {tabs.length > 1 && (
        <Container>
          <div className="flex gap-4 flex-wrap justify-center">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index;

              return (
                <Button
                  border
                  className="flex-1"
                  invert={!isActive}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="flex justify-center items-center gap-2">
                    {tab.icon && (
                      <span className="hidden sm:inline">{tab.icon}</span>
                    )}

                    <span>
                      <span>{tab.label}</span>
                      <span className="hidden lg:inline">
                        &nbsp;&bull;&nbsp;
                      </span>
                      <span className="hidden lg:inline">
                        {tab.description}
                      </span>
                    </span>
                  </div>
                </Button>
              );
            })}
          </div>
        </Container>
      )}

      <div>
        {tabs.map((tab, index) => (
          <TabPanel key={index} isActive={index === activeTab}>
            {tab.content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
}

function TabPanel({
  isActive,
  children,
}: {
  isActive: boolean;
  children: React.ReactNode;
}) {
  return <div className={isActive ? 'block' : 'hidden'}>{children}</div>;
}
