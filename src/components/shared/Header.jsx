import { Popover, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'

export default function Header() {
  return (
    <div className="bg-white h-16 px-4 flex justify-between items-center border-0 border-gray-200">
        <div className='relative'>
            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
            <input type="text" placeholder='Search..' 
            className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11 pr-4'/>
        </div>
        <div className='flex items-center gap-2 mr-2'>
        <Popover className="relative">
            {({ open }) => (
            <>
                <Popover.Button
                className='p-1.5 inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-900'>
                <HiOutlineChatAlt fontSize={24}/>
                </Popover.Button>
                <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                >
                <Popover.Panel>This is the panel</Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
            <HiOutlineBell fontSize={24}/>
        </div>
    </div>
  )
}
