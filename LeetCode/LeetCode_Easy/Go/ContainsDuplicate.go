func containsDuplicate(nums []int) bool {
	m := make(map[int]struct{})

	for _, num := range nums {
		if _, isExist := m[num]; isExist {
			return true
		}

		m[num] = struct{}{}
	}
	return false
}