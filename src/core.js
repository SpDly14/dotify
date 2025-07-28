
        class cursor {
            constructor() {
                if (this.isTouchDevice()) return;

                this.cursor = null;
                this.mouseX = 0;
                this.mouseY = 0;
                this.currentState = 'default';
                this.isActive = false;
                
                this.init();
            }

            isTouchDevice() {
                return (('ontouchstart' in window) ||
                        (navigator.maxTouchPoints > 0) ||
                        (navigator.msMaxTouchPoints > 0));
            }

            init() {
                this.createCursor();
                this.bindEvents();
                this.updateCursorPosition();
            }

            createCursor() {
                this.cursor = document.createElement('div');
                this.cursor.className = 'cursor';
                document.body.appendChild(this.cursor);
            }

            bindEvents() {
                // Mouse movement
                document.addEventListener('mousemove', (e) => {
                    this.mouseX = e.clientX;
                    this.mouseY = e.clientY;
                    this.updateCursorPosition();
                });

                // Cursor visibility
                document.addEventListener('mouseenter', () => {
                    this.cursor.style.opacity = '1';
                });

                document.addEventListener('mouseleave', () => {
                    this.cursor.style.opacity = '0';
                });

                // Mouse states
                document.addEventListener('mousedown', (e) => {
                    this.isActive = true;
                    if (this.currentState === 'grab') {
                        this.setState('grabbing');
                    } else if (!this.hasSpecialState(e.target)) {
                        this.setState('active');
                    }
                });

                document.addEventListener('mouseup', () => {
                    this.isActive = false;
                    if (this.currentState === 'grabbing') {
                        this.setState('grab');
                    } else if (this.currentState === 'active') {
                        this.setState('default');
                    }
                });

                this.setupStateDetection();
            }

            updateCursorPosition() {
                if (!this.cursor) return;
                this.cursor.style.left = this.mouseX + 'px';
                this.cursor.style.top = this.mouseY + 'px';
            }

            hasSpecialState(element) {
                const specialStates = [
                    'loading', 'error', 'success', 'warning', 'magic',
                    'zoom-in', 'zoom-out', 'crosshair', 'forbidden'
                ];
                
                return specialStates.some(state => {
                    const selectors = this.getSelectorsForState(state);
                    return this.matchesAny(element, selectors);
                });
            }

            setupStateDetection() {
                // Define cursor states with their selectors
                const stateSelectors = {
                    // Basic interaction
                    'hover': ['a', 'button', '[role="button"]', '.btn', '.cursor-hover'],
                    'text': ['input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="url"]', 'input[type="tel"]', 'textarea', '[contenteditable="true"]', '.cursor-text'],
                    'grab': ['.cursor-grab', '.draggable', '[draggable="true"]', '.sortable-item'],
                    'move': ['.cursor-move', '.moveable', '.dragging-handle'],
                    
                    // Status states
                    'loading': ['.cursor-loading', '.loading', '.spinner', '[data-loading="true"]'],
                    'error': ['.cursor-error', '.error', '.invalid', '[aria-invalid="true"]'],
                    'success': ['.cursor-success', '.success', '.valid', '.completed'],
                    'warning': ['.cursor-warning', '.warning', '.caution'],
                    
                    // Creative effects
                    'magic': ['.cursor-magic', '.magic', '.enchanted'],
                    
                    // Functional states
                    'zoom-in': ['.cursor-zoom-in', '.zoom-in', '[data-zoom="in"]'],
                    'zoom-out': ['.cursor-zoom-out', '.zoom-out', '[data-zoom="out"]'],
                    'pointer': ['.cursor-pointer', '.pointer'],
                    'crosshair': ['.cursor-crosshair', '.crosshair', '.precision'],
                    'resize-h': ['.cursor-resize-h', '.resize-horizontal', '[data-resize="horizontal"]'],
                    'resize-v': ['.cursor-resize-v', '.resize-vertical', '[data-resize="vertical"]'],
                    'help': ['.cursor-help', '.help', '[data-tooltip]', '[title]'],
                    'forbidden': ['.cursor-forbidden', '.forbidden', '.disabled', '[disabled]', '[aria-disabled="true"]']
                };

                document.addEventListener('mouseover', (e) => {
                    const target = e.target;
                    let newState = this.isActive ? 'active' : 'default';

                    // Check for explicit cursor states (priority order)
                    const priorityStates = [
                        'forbidden', 'loading', 'error', 'success', 'warning',
                        'magic', 'crosshair', 'zoom-in', 'zoom-out',
                        'resize-h', 'resize-v', 'help', 'pointer', 'move', 'grab', 'text', 'hover'
                    ];
                    
                    for (const state of priorityStates) {
                        if (this.matchesAny(target, stateSelectors[state] || [])) {
                            newState = state;
                            break;
                        }
                    }

                    this.setState(newState);
                });

                document.addEventListener('mouseout', (e) => {
                    // Only reset if not moving to a child element
                    if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
                        this.setState(this.isActive ? 'active' : 'default');
                    }
                });
            }

            getSelectorsForState(state) {
                const stateSelectors = {
                    'hover': ['a', 'button', '[role="button"]', '.btn', '.cursor-hover'],
                    'text': ['input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="search"]', 'input[type="url"]', 'input[type="tel"]', 'textarea', '[contenteditable="true"]', '.cursor-text'],
                    'grab': ['.cursor-grab', '.draggable', '[draggable="true"]', '.sortable-item'],
                    'move': ['.cursor-move', '.moveable', '.dragging-handle'],
                    'loading': ['.cursor-loading', '.loading', '.spinner', '[data-loading="true"]'],
                    'error': ['.cursor-error', '.error', '.invalid', '[aria-invalid="true"]'],
                    'success': ['.cursor-success', '.success', '.valid', '.completed'],
                    'warning': ['.cursor-warning', '.warning', '.caution'],
                    'magic': ['.cursor-magic', '.magic', '.enchanted'],
                    'zoom-in': ['.cursor-zoom-in', '.zoom-in', '[data-zoom="in"]'],
                    'zoom-out': ['.cursor-zoom-out', '.zoom-out', '[data-zoom="out"]'],
                    'pointer': ['.cursor-pointer', '.pointer'],
                    'crosshair': ['.cursor-crosshair', '.crosshair', '.precision'],
                    'resize-h': ['.cursor-resize-h', '.resize-horizontal', '[data-resize="horizontal"]'],
                    'resize-v': ['.cursor-resize-v', '.resize-vertical', '[data-resize="vertical"]'],
                    'help': ['.cursor-help', '.help', '[data-tooltip]', '[title]'],
                    'forbidden': ['.cursor-forbidden', '.forbidden', '.disabled', '[disabled]', '[aria-disabled="true"]']
                };
                
                return stateSelectors[state] || [];
            }

            matchesAny(element, selectors) {
                return selectors.some(selector => {
                    try {
                        return element.matches(selector) || element.closest(selector);
                    } catch (e) {
                        return false;
                    }
                });
            }

            setState(state) {
                if (!this.cursor || this.currentState === state) return;
                
                // Remove all state classes
                const allStates = [
                    'hover', 'active', 'text', 'grab', 'grabbing', 'move',
                    'loading', 'error', 'success', 'warning',
                    'magic',
                    'zoom-in', 'zoom-out', 'pointer', 'crosshair', 'resize-h', 'resize-v',
                    'help', 'forbidden'
                ];
                
                this.cursor.classList.remove(...allStates);
                
                // Add new state class
                if (state !== 'default') {
                    this.cursor.classList.add(state);
                }
                
                this.currentState = state;
            }

            // Public API methods
            setCustomState(state) {
                this.setState(state);
            }

            hide() {
                if (this.cursor) this.cursor.style.opacity = '0';
            }

            show() {
                if (this.cursor) this.cursor.style.opacity = '1';
            }

            destroy() {
                if (this.cursor) {
                    this.cursor.remove();
                    this.cursor = null;
                }
                
                // Restore default cursors
                const restoreStyle = document.createElement('style');
                restoreStyle.textContent = '* { cursor: auto !important; }';
                document.head.appendChild(restoreStyle);
                
                setTimeout(() => restoreStyle.remove(), 100);
            }

            // Utility methods
            temporaryState(state, duration = 1000) {
                const previousState = this.currentState;
                this.setState(state);
                setTimeout(() => {
                    this.setState(previousState);
                }, duration);
            }

            onHover(selector, state) {
                document.addEventListener('mouseover', (e) => {
                    if (e.target.matches(selector) || e.target.closest(selector)) {
                        this.setState(state);
                    }
                });
                
                document.addEventListener('mouseout', (e) => {
                    if (e.target.matches(selector) || e.target.closest(selector)) {
                        this.setState('default');
                    }
                });
            }
        }

        // Auto-initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                window.cursor = new cursor();
            });
        } else {
            window.cursor = new cursor();
        }

        // Global utility functions
        window.cursorAPI = {
            setState: (state) => window.cursor?.setCustomState(state),
            hide: () => window.cursor?.hide(),
            show: () => window.cursor?.show(),
            destroy: () => window.cursor?.destroy(),
            temporary: (state, duration) => window.cursor?.temporaryState(state, duration),
            onHover: (selector, state) => window.cursor?.onHover(selector, state)
        };
    