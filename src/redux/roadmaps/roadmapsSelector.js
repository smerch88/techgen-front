import { createSelector } from "@reduxjs/toolkit"

const roadmapsSelector = createSelector(
    state => state.roadmaps.filter,
    state => state.roadmaps.roadmaps,
    state => state.roadmaps.roadmapsLoadingStatus,
    (filter, roadmaps, roadmapsLoadingStatus) => {
        const filteredRoadmaps = roadmaps.filter(item => item.filter === filter);
        return {roadmaps: filteredRoadmaps, roadmapsLoadingStatus}
    }
)

export default roadmapsSelector;