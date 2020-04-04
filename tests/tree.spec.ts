import { Tree } from '../src'

describe('Tree', () => {

    describe('shoud insert', () => {
        it('should insert object is ascending order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 3, value: 'TEST-3' });
        });
    
        it('should insert object is descending order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 3, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-3' });
        });
    
        it('should insert object is descending and after in ascending order order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 5, value: 'TEST-1' });
            tree.insert({ key: 3, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-3' });
            tree.insert({ key: 2, value: 'TEST-4' });
            tree.insert({ key: 4, value: 'TEST-5' });
            tree.insert({ key: 6, value: 'TEST-6' });
        });
    
        it('should insert object is ascending and after in descending order order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 2, value: 'TEST-1' });
            tree.insert({ key: 4, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-3' });
            tree.insert({ key: 5, value: 'TEST-4' });
            tree.insert({ key: 3, value: 'TEST-5' });
            tree.insert({ key: 1, value: 'TEST-6' });
        });
    
        it('should insert equal objects', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 4, value: 'TEST-4-1' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 4, value: 'TEST-4-2' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 4, value: 'TEST-4-4' });
        });
    
        it('should insert equal biggest objects', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 6, value: 'TEST-6-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-6-2' });
            tree.insert({ key: 4, value: 'TEST-4' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 6, value: 'TEST-6-3' });
        });
    
        it('should insert equal smallest objects', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 4, value: 'TEST-4' });
            tree.insert({ key: 1, value: 'TEST-1-2' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 1, value: 'TEST-1-3' });
            tree.insert({ key: 1, value: 'TEST-1-4' });
        });
    
        it('should insert objects in random order 1', () => {
            const tree = new Tree<string>();
            
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 10, value: 'TEST-10' });
            tree.insert({ key: 7, value: 'TEST-7' });
            tree.insert({ key: 8, value: 'TEST-8' });
            tree.insert({ key: 9, value: 'TEST-9' });
            tree.insert({ key: 11, value: 'TEST-11' });
            tree.insert({ key: 12, value: 'TEST-12' });
            tree.insert({ key: 13, value: 'TEST-13' });
        });
    
        it('should insert objects in random order 2', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 7, value: 'TEST-7' });
            tree.insert({ key: 12, value: 'TEST-12' });
            tree.insert({ key: 9, value: 'TEST-9' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 11, value: 'TEST-11' });
            tree.insert({ key: 8, value: 'TEST-8' });
            tree.insert({ key: 10, value: 'TEST-10' });
            tree.insert({ key: 13, value: 'TEST-13' });
        });
    
        it('should insert objects in random order 3', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 13, value: 'TEST-13' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 11, value: 'TEST-11' });
            tree.insert({ key: 7, value: 'TEST-7' });
            tree.insert({ key: 10, value: 'TEST-10' });
            tree.insert({ key: 8, value: 'TEST-8' });
            tree.insert({ key: 12, value: 'TEST-12' });
            tree.insert({ key: 9, value: 'TEST-9' });
        });
    });

    describe('should drop', () => {
        it('should drop object is ascending order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.drop(1);
            tree.drop(2);
            tree.drop(3);
        });

        it('should drop object is descending order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 3, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-3' });
            tree.drop(3);
            tree.drop(2);
            tree.drop(1);
        });
    
        it('should drop object is descending and after in ascending order order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 5, value: 'TEST-1' });
            tree.insert({ key: 3, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-3' });
            tree.insert({ key: 2, value: 'TEST-4' });
            tree.insert({ key: 4, value: 'TEST-5' });
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.drop(5);
            tree.drop(3);
            tree.drop(1);
            tree.drop(2);
            tree.drop(3);
            tree.drop(6);
        });
    
        it('should drop object is ascending and after in descending order order', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 2, value: 'TEST-1' });
            tree.insert({ key: 4, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-3' });
            tree.insert({ key: 5, value: 'TEST-4' });
            tree.insert({ key: 3, value: 'TEST-5' });
            tree.insert({ key: 1, value: 'TEST-6' });
            tree.drop(2);
            tree.drop(4);
            tree.drop(6);
            tree.drop(5);
            tree.drop(3);
            tree.drop(1);
        });
    
        it('should drop equal objects', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 4, value: 'TEST-4-1' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 4, value: 'TEST-4-2' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 4, value: 'TEST-4-4' });
            tree.drop(1);
            tree.drop(2);
            tree.drop(6);
            tree.drop(4);
            tree.drop(3);
            tree.drop(4);
            tree.drop(5);
            tree.drop(4);
        });
    
        it('should drop equal biggest objects', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 6, value: 'TEST-6-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-6-2' });
            tree.insert({ key: 4, value: 'TEST-4' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 6, value: 'TEST-6-3' });
            tree.drop(1);
            tree.drop(6);
            tree.drop(2);
            tree.drop(6);
            tree.drop(4);
            tree.drop(3);
            tree.drop(5);
            tree.drop(6);
        });
    
        it('should drop equal smallest objects', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 4, value: 'TEST-4' });
            tree.insert({ key: 1, value: 'TEST-1-2' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 1, value: 'TEST-1-3' });
            tree.insert({ key: 1, value: 'TEST-1-4' });
            tree.drop(1);
            tree.drop(2);
            tree.drop(4);
            tree.drop(1);
            tree.drop(3);
            tree.drop(5);
            tree.drop(1);
            tree.drop(1);
        });
    
        it('should drop objects in random order 1', () => {
            const tree = new Tree<string>();
            
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 10, value: 'TEST-10' });
            tree.insert({ key: 7, value: 'TEST-7' });
            tree.insert({ key: 8, value: 'TEST-8' });
            tree.insert({ key: 9, value: 'TEST-9' });
            tree.insert({ key: 11, value: 'TEST-11' });
            tree.insert({ key: 12, value: 'TEST-12' });
            tree.insert({ key: 13, value: 'TEST-13' });
            tree.drop(2);
            tree.drop(1);
            tree.drop(5);
            tree.drop(3);
            tree.drop(6);
            tree.drop(10);
            tree.drop(7);
            tree.drop(8);
            tree.drop(9);
            tree.drop(11);
            tree.drop(12);
            tree.drop(13);
        });
    
        it('should drop objects in random order 2', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 7, value: 'TEST-7' });
            tree.insert({ key: 12, value: 'TEST-12' });
            tree.insert({ key: 9, value: 'TEST-9' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 11, value: 'TEST-11' });
            tree.insert({ key: 8, value: 'TEST-8' });
            tree.insert({ key: 10, value: 'TEST-10' });
            tree.insert({ key: 13, value: 'TEST-13' });
            tree.drop(6);
            tree.drop(5);
            tree.drop(2);
            tree.drop(1);
            tree.drop(7);
            tree.drop(12);
            tree.drop(9);
            tree.drop(3);
            tree.drop(11);
            tree.drop(8);
            tree.drop(10);
            tree.drop(13);
        });
    
        it('should drop objects in random order 3', () => {
            const tree = new Tree<string>();
    
            tree.insert({ key: 1, value: 'TEST-1' });
            tree.insert({ key: 2, value: 'TEST-2' });
            tree.insert({ key: 6, value: 'TEST-6' });
            tree.insert({ key: 3, value: 'TEST-3' });
            tree.insert({ key: 13, value: 'TEST-13' });
            tree.insert({ key: 5, value: 'TEST-5' });
            tree.insert({ key: 11, value: 'TEST-11' });
            tree.insert({ key: 7, value: 'TEST-7' });
            tree.insert({ key: 10, value: 'TEST-10' });
            tree.insert({ key: 8, value: 'TEST-8' });
            tree.insert({ key: 12, value: 'TEST-12' });
            tree.insert({ key: 9, value: 'TEST-9' });
            tree.drop(1);
            tree.drop(2);
            tree.drop(6);
            tree.drop(3);
            tree.drop(13);
            tree.drop(5);
            tree.drop(11);
            tree.drop(7);
            tree.drop(10);
            tree.drop(8);
            tree.drop(12);
            tree.drop(9);
        });
    })

});
