"use client"
import React, { ReactNode, useState } from "react"
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/src/components/ui/tabs"

interface Props {
	currentTab: string
	onSelectTab?: (value: string) => void
	onClickTab?: (tab: TabsType) => void
	tabs: TabsType[]
	fullWidth?: boolean
}

export type TabsType = {
	value: string
	label: string
	icon?: ReactNode
	component?: ReactNode
}

const TabPanel = ({
	currentTab,
	onSelectTab,
	tabs,
	onClickTab,
	fullWidth,
}: Props) => {
	const handleValueChange = (value: string) => {
		onSelectTab?.(value)
	}

	return (
		<Tabs
			value={currentTab}
			onValueChange={handleValueChange}
			className={fullWidth ? "w-full" : ""}
		>
			<TabsList className={`flex ${fullWidth ? "w-full" : ""}`}>
				{tabs.map(item => (
					<TabsTrigger
						key={item.value}
						value={item.value}
						className={`flex items-center gap-2 ${fullWidth ? "flex-1" : ""}`}
						onClick={() => onClickTab?.(item)}
					>
						{item.icon && item.icon}
						{item.label}
					</TabsTrigger>
				))}
			</TabsList>
		</Tabs>
	)
}

interface TabItemProps {
	children?: React.ReactNode
	value: string
}

function TabItem(props: TabItemProps) {
	const { children, value, ...other } = props

	return (
		<TabsContent value={value} {...other}>
			<div className="p-6">{children}</div>
		</TabsContent>
	)
}

interface TabContainerProps {
	tabs: TabsType[]
}

function TabsContainer({ tabs }: TabContainerProps) {
	const [tabValue, setTabValue] = useState(tabs[0].value)

	return (
		<div className="w-full">
			<TabPanel
				currentTab={tabValue}
				tabs={tabs}
				onSelectTab={setTabValue}
			/>
			{tabs.map(tab => (
				<TabItem key={tab.value} value={tab.value}>
					{tab.component}
				</TabItem>
			))}
		</div>
	)
}

export { TabPanel, TabItem, TabsContainer }
