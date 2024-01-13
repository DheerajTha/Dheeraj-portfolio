import React from 'react'
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import { Tabs, rem } from '@mantine/core';

const TabOption = () => {

    const iconStyle = { width: rem(40), height: rem(12) };
  return (
    <div >
        
        <Tabs variant="outline" radius="md" defaultValue="gallery" className='container mx-auto px-16 pb-16'>
    <div className='container flex flex-col md:items-center px-8 pb-16  sm:px-12'>
      <Tabs.List>
        <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
          Gallery
        </Tabs.Tab>
        <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
          Messages
        </Tabs.Tab>
        <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
          Settings
        </Tabs.Tab>
      </Tabs.List>
    </div>
      <Tabs.Panel value="gallery" className='mt-5'>
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
    </div>
  )
}

export default TabOption;


